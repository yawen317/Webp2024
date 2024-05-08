import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function App() {

  var openurl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
  // fetch data from api using GET method
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(openurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  //  column with "title", "location","price","showUnit"
  const columns = [
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'location', headerName: 'Location', width: 300 },
    { field: 'price', headerName: 'Price', width: 300 },
    { field: 'showUnit', headerName: 'ShowUnit', width: 300 },
  ];
  // convert data to rows
  /*
  {
    "version": "1.4",
    "UID": "63cf5a4173f77c10840eb4cf",
    "title": "穹頂計畫III 末日慶典",
    "category": "6",
    "showInfo": [
      {
        "time": "2024/01/01 09:00:00",
        "location": "臺南市仁德區文華路二段66號",
        "locationName": "臺南市奇美博物館",
        "onSales": "Y",
        "price": "費用+1980",
        "latitude": null,
        "longitude": null,
        "endTime": "2024/06/30 17:00:00"
      }
    ],
    "showUnit": "(中華民國)奇美博物館",
    "discountInfo": "費用:3-6人 $1980",
    "descriptionFilterHtml": "    在上次盜竊藏品功虧一簣後，隱藏版的第七位成員奧德修斯再次對六奇士提出挑戰。他將過去盜竊的十二件希臘文物寄送至奇美博物館，同時宣稱將啟動偉大的「末日慶典」計畫，讓世界陷入狂喜之中。身為六奇士的你們，手上的線索只有一張奧德修斯掉落的照片，以及四位沒有不在場證明的嫌疑人。\r\n你們的任務是要抓到奧德修斯，查清「末日慶典」的真面目，並阻止計畫啟動。\r\n\r\n    追查嫌疑犯的偵查推理類遊戲穿梭展廳解謎任務首度加入戶外園區解謎關卡。\r\n\r\n    全新解謎任務\r\n    (含6個關卡與審訊嫌疑犯任務）暗藏玄機、樣式各異的謎題道具，帶你穿梭常設展廳與戶外園區，一邊解謎一邊認識精彩藏品。\r\n\r\n    遊戲盒帶入展廳即可開始玩！\r\n不需另外購買門票，不需下載APP，手機連上系統即可進入故事情節開啟挑戰。\r\n\r\n    合作、競賽都行，越多人玩越有趣！\r\n一隊以3-6人為限，沒有場次限制、不需工作人員，想玩就出發！不限遊戲時間，玩到破關為止。",
    "imageUrl": "",
    "masterUnit": [
      "奇美博物館"
    ],
    "subUnit": [],
    "supportUnit": [],
    "otherUnit": [],
    "webSales": "",
    "sourceWebPromote": "https://www.chimeimuseum.org/event/62b964cb3ff31",
    "comment": "",
    "editModifyDate": "",
    "sourceWebName": "全國藝文活動資訊系統",
    "startDate": "2024/01/01",
    "endDate": "2024/06/30",
    "hitRate": 87
  },
  */
  const rows = data.map((item) => {
    console.log(item);
    return {
      id: item.UID,
      title: item.title,
      location: item.showInfo[0].location,
      price: item.showInfo[0].price,
      showUnit: item.showUnit,
    };
  }
  );

  // check the data if loaded remove the loading and show the datagrid
  useEffect(() => {
    if (data.length > 0) {
    } else {
    }
  }
    , [data]);
  console.log(rows);

  return (
    <div className="App">
      <Box sx={{ height: "100vh", width: "100%" }} style={{ margin: "auto" }} >
      <DataGrid
        // unique id for each row
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        className="datagrid"
        loading={data.length === 0}
      />
      
    </Box>
    </div>
  );
}

export default App;

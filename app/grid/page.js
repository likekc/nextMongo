'use client'
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
//import { data } from 'autoprefixer';
import Grid from './page_grid'



const DataReader = () => {
  let [listData, setlistData] = useState(null);
  let [c, setc] = useState(0);

  const fileOpen = (e) => {     //엑셀파일 불러오기
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const xData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        
        //console.log('Excel Data:', listData); //JSON.stringify(listData));
        setlistData(xData);        
      };
      reader.readAsBinaryString(file);
    }
    e.target.value = ""; 
  };

  let columnDefs = []
  let firstRowData = listData && listData.length > 0 ? listData[0] : null;
    columnDefs = firstRowData
      ? Object.keys(firstRowData).map(key => ({
        headerName: key, // 엑셀 데이터의 키를 사용하여 컬럼 헤더 생성
        field: key,      // 엑셀 데이터의 키를 사용하여 필드 지정
        }))
      : [];

  useEffect(()=>{
    //console.log("유즈이팩")
    readDB();  
  }, [c] )
  


  const pushDB = async () => {           //DB로 전송
    if(listData != null) {    
      try {
          fetch('./api/grid/gridPush', {
          method: 'POST',
          body: JSON.stringify(listData)
        })
        .then(res =>{
            console.log(res.status)
        })
        setc(c +1)
      } catch (error) {
        console.log(error);
        // 에러 처리
      }
    }
  };

  const readDB = async () => {
    try{ 
      fetch('/api/grid/gridRead', {
        method : 'GET'
        })
        .then(async res => {
                const resData = await res.json()   //await 사용시에 async 필수
                //console.log(resData)
                setlistData(resData);
                }
        )
      } catch (error) {
        console.error('Error fetching data:', error.message)
      }
  }
    
  const delDB = async () => {     //DB 삭제
    if(listData != null) {
      const listCount = listData.length
      let pids = [];  //반복문 전에 선언
      //console.log(listCount);
      const confirmed = window.confirm(listCount+"개의 데이터를 삭제하시겠습니까??");
      if (confirmed) {
        console.log("gridDel 요청"); 
        //console.log(listData[0].Pid);
        
        for(const item of listData) {
           pids.push(item.Pid)
        }

        try {
          fetch('./api/grid/gridDel', {
          method: 'POST',
          body: JSON.stringify(pids)
          })
        .then(res =>{
            if(res.status === 200){
              //alert(listCount+"개 삭제완료")
              return res.json();
            }
          })
        .then(data=> {
          const resData = data;
          alert(resData);
          setc(c +1)
        })
        

        } catch (error) {
          console.log(error);
          // 서버응답 에러 처리
        } 
        

      }
    }
  }




    //ag-grid 설정값
  const GridOptions = {
    pagination: true,       //페이지 나타내기
    paginationPageSize: 20,    //페이지에 나타날 라인수
    suppressHorizontalScroll: true
  };
  const defaultColDef ={
      resizable: true,
      sortable: true,
      filter: true
  };

  return (
    <div>
    <label className="input-file-button" for="input-file"> 엑셀 불러오기 </label>
    <input id="input-file" type="file" accept=".xlsx, .xls" onChange={fileOpen} style={{display:"none"}} />
    <div>
    <br/>
      <div>
        <button type="button" onClick={readDB}> DB 불러오기</button>
        <button type="button" onClick={pushDB}> DB로 전송</button>
        <button type="button" onClick={delDB}> DB에서 List 삭제</button>
      </div>

        {/* <div className="ag-theme-quartz-dark" style={{ height: 400, width: '100%' }}>
          <AgGridReact 
            rowData={listData ? listData : []} // 데이터가 없으면 빈 배열 전달
            columnDefs={columnDefs}
            gridOptions={GridOptions}
            enableCellTextSelection={true}
            pagination={true}
            domLayout="autoHeight"
            defaultColDef={defaultColDef}
            rowSelection={'multiple'}
          />
        </div> */}
      </div>

      <br/>
      <br/>

      <div>
        <Grid />
      </div>

    </div>
    
  );

};

export default DataReader;
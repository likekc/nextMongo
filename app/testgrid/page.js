'use client'
import React, { useCallback, useState } from 'react';
import * as XLSX from 'xlsx';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';


const ExcelReader = () => {
  
  let [excelData, setExcelData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        
        //console.log('Excel Data:', excelData); //JSON.stringify(excelData));
        setExcelData(excelData);        
      };
      reader.readAsBinaryString(file);
    }
  };

  // 엑셀 데이터의 첫 번째 열 가져오기
  let firstRowData = excelData && excelData.length > 0 ? excelData[0] : null;
  // columnDefs 생성
  let columnDefs = firstRowData
    ? Object.keys(firstRowData).map(key => ({
      headerName: key, // 엑셀 데이터의 키를 사용하여 컬럼 헤더 생성
      field: key,      // 엑셀 데이터의 키를 사용하여 필드 지정
      }))
    : [];


  const pushDB = async () => {           //DB로 전송
    try {
        fetch('./api/grid/gridPush', {
        method: 'POST',
        body: JSON.stringify(excelData)
      })
      .then(res =>{
          console.log(res.status)
      })
      
    } catch (error) {
      console.log(error);
      // 에러 처리
    }
  };

  const readDB = async () => {
    try{
      fetch('/api/grid/gridRead', {
        method : 'GET'
        })
        .then(async res => {
                const Data = await res.json()   //await 사용시에 async 필수
                console.log(Data)

                setExcelData(Data);

                firstRowData = excelData && excelData.length > 0 ? excelData[0] : null;
                // columnDefs 생성
                const newcolumnDefs = firstRowData
                   ? Object.keys(firstRowData).map(key => ({
                     headerName: key, // 엑셀 데이터의 키를 사용하여 컬럼 헤더 생성
                     field: key,      // 엑셀 데이터의 키를 사용하여 필드 지정
                     }))
                   : [];
                  columnDefs = newcolumnDefs
                }
        )
      } catch (error) {
        console.error('Error fetching data:', error.message)
      }
  }
    
  const delDB = async () => {
    console.log("delDB 실행"); 
  }



    //ag-grid 설정값
  const GridOptions = {
    pagination: true,       //페이지 나타내기
    paginationPageSize: 50,    //페이지에 나타날 라인수
    suppressHorizontalScroll: true
  };
  const defaultColDef ={
      resizable: true,
      sortable: true,
      filter: true
  };



  return (
    <div>
    <input type="file" accept=".xlsx, .xls" onChange={handleFileChange}  />
    <div>
      <div>
        <button type="button" onClick={readDB}> DB 불러오기</button>
        <button type="button" onClick={pushDB}> DB로 전송</button>
        <button type="button" onClick={delDB}> DB에서 List 삭제</button>
      </div>

        <div className="ag-theme-quartz-dark" style={{ height: 400, width: '100%' }}>
          <AgGridReact 
            rowData={excelData ? excelData : []} // 데이터가 없으면 빈 배열 전달
            columnDefs={columnDefs}
            gridOptions={GridOptions}
            enableCellTextSelection={true}
            pagination={true}
            domLayout="autoHeight"
            defaultColDef={defaultColDef}
          />
        </div>
      </div>

    </div>
  );
};

export default ExcelReader;
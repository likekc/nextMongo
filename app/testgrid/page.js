'use client'
import React, { useCallback, useState } from 'react';
import * as XLSX from 'xlsx';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';


const ExcelReader = () => {
  
  const [excelData, setExcelData] = useState(null);

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

  // 엑셀 데이터의 첫 번째 열 가져오기
  const firstRowData = excelData && excelData.length > 0 ? excelData[0] : null;
  // columnDefs 생성
  const columnDefs = firstRowData
    ? Object.keys(firstRowData).map(key => ({
        headerName: key, // 엑셀 데이터의 키를 사용하여 컬럼 헤더 생성
        field: key,      // 엑셀 데이터의 키를 사용하여 필드 지정
      }))
    : [];


    const Inserdata = async () => {           //수집리스트 저장 버튼 수행
      try {
        // 서버 엔드포인트
        const serverG = './api/grid/grid';
    
        // 서버로 엑셀 데이터 전송
        const response = await fetch(serverG, {
          method: 'POST',
          body: JSON.stringify(excelData)
        });
    
        const result = await response.json();
        console.log(result, "<====grid서버요청결과");
    
        // 여기에서 필요한 UI 업데이트 등을 수행할 수 있습니다.
      } catch (error) {
        console.log(error);
        // 에러 처리
      }
    };

  return (
    <div>
    <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
    <div>
        <h2>Excel Data</h2>
        <div>
        <h3>수집이름</h3>
          <input /> <input type="button" onClick={Inserdata} value="수집리스트 저장" />
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
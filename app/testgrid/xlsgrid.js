'use client'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const ExcelLiest = () => {
  // ... (이전 코드 생략)
  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      {excelData && (
        <div>
          <h2>Excel Data</h2>
          <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact rowData={excelData}>
              {/* 여기에 열(column) 정의 등을 추가하세요 */}
            </AgGridReact>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExcelLiest;
'use client'
import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridOptions } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const App = () => {
  const [rowData] = useState([
    { artist: "Nirvana", country: "US", debut: 1987 },
    { artist: "Arctic Monkeys", country: "UK", debut: 2005 },
    { artist: "R.E.M.", country: "US", debut: 1980 },
    { artist: "AC/DC", country: "Australia", debut: 1975 },
    { artist: "Blur", country: "UK", debut: 1990 },
    { artist: "Tahiti80", country: "France", debut: 1993 }
  ]);

  const [columnDefs] = useState([
    { field: "artist" },
    { field: "country" },
    { field: "debut" }
  ]);

  const GridOptions = {
    pagination: true,       //페이지 나타내기
    paginationPageSize: 4,    //페이지에 나타날 라인수
    suppressHorizontalScroll: true
  };

  const defaultColDef ={
      resizable: true,
      sortable: true,
      filter: true
  };


  return (
    <div className="ag-theme-alpine" style={{ height: 350, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        // defaultColDef={defaultColDef}
        gridOptions={GridOptions}     //그리드 옵션 위에서 설정
        enableCellTextSelection={true}    //텍스트 선택 가능여부
        pagination={true}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default App;
'use client'
import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react';
import * as XLSX from 'xlsx';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Component } from 'ag-grid-community';
//import { data } from 'autoprefixer';

const Comp = p => {
  const onDollar = useCallback( ()=> window.alert('Dollar ' + p. value));
  
  return(
    <>
      <button onClick={onDollar}>$</button>
      {p.value}
    </>
  )
}

const printResult = (res) => {
  console.log('---------------------------------------');
  if (res.add) {
    res.add.forEach((rowNode) => {
      console.log('Added Row Node', rowNode);
    });
  }
  if (res.remove) {
    res.remove.forEach((rowNode) => {
      console.log('Removed Row Node', rowNode);
    });
  }
  if (res.update) {
    res.update.forEach((rowNode) => {
      console.log('Updated Row Node', rowNode);
    });
  }
};

// 셀 랜더
// class pushComp extends Component {
//   render() {
//   return (
//     <>
//       <button onClick={ ()=> window.alert('Push')}>@</button>
//       {this.value}
//     </>);
//   }
// }

// 셀 이미지 랜더
// const imgComp = params => {
//   const imageUrl = "http://d1yk6z6emsz7qy.cloudfront.net/static/images/load"
//   const imgStyle = {width: 40, top:0, left: 0, positon: 'absolute'};
//   const style = {marginLeft:20};
//   return(
//     <span style={style}>
//       <img scr={imageUrl} style={imgStyle}/>
//       {params.value}
//     </span>
//   )
// }

const Grid = () => {
  const gridRef = useRef(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

  let [columnDefs, setColumDefs] = useState([
    //{field: '_id'},
    {field: 'Pid', checkboxSelection:true, headerCheckboxSelection:true},// cellRendererSelector: p => {
    //   if (p.value != 3198){
    //     return {component: pushComp};
    //   }
    //   }  
    // },
    {field: 'categories',cellRenderer: Comp},
    {field: 'name_brand'},{field: 'name_i'},{field: 'name_j'},{field: 'name_tit'},
    {field: 'stock_status_T'},{field: 'stock_status_C'},{field: 'Wprice'},{field: 'Psp'},{field: 'Blink'},{field: 'img_links'}
  ])
  
  let [rowData, setRowData] = useState([
    {//_id: 'a', 
      Pid: 'b', 
      categories: 'c', 
      name_brand: 'd', 
      name_i: 'e', 
      name_j:'f',	
      name_tit: 'g',
      stock_status_T: 'h',
      stock_status_C: 'i',
      Wprice: 'j',
      Psp: 'k',
      Blink: 'l',
      img_links: 'm'
  }
    ]);

  const defaultColDef = useMemo( ()=> ({
    resizable: true,
    sortable: true,
    filter: true,
    editable: true,
    minWidth: 100
  }), []);

  // const cellClickedListener = useCallback( e=> {    //셀클릭 리스너
  //   console.log('cellClecked', e)
  // })

  const openData = useCallback(() => {
    fetch('/api/grid/gridRead',{ method : 'GET'})
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);

  // const onGridReady = useCallback((params) => {
  //   setGroupingEnabled(false, params.api);
  // }, []);
  
  
    //ag-grid 설정값
  const GridOptions = {
    pagination: true,       //페이지 나타내기
    paginationPageSize: 20,    //페이지에 나타날 라인수
    //suppressHorizontalScroll: true
  };

  const pushMeClicked = useCallback( e=>{     //선택취소 함수
    gridRef.current.api.deselectAll();
  })

  // const statusBar = useMemo(() => {
  //   return {
  //     statusPanels: [{ statusPanel: 'agAggregationComponent', align: 'right' }],
  //   };
  // }, []);

  // gridApi.startEditingCell({     //셀편집api
  //   rowIndex: 0,
  //   colKey: 'country'
  // });

  // print details of editing cell
  // const cellDefs = gridApi.getEditingCells(); 
  // cellDefs.forEach(cellDef => {
  //     console.log(cellDef.rowIndex);
  //     console.log(cellDef.column.getId());
  //     console.log(cellDef.floating);
  // });

  
  const gridUpdate = useCallback(() => {    //그리드의 모든행을 콘솔에
    const rowData = [];
    gridRef.current.api.forEachNode(function (node) {
      rowData.push(node.data);
    });
    console.log('Row Data:');
    console.table(rowData);
  }, []);

  const clearData = useCallback(() => {
    const rowData = [];
    gridRef.current.api.forEachNode(function (node) {
      rowData.push(node.data);
    });
    const res = gridRef.current.api.applyTransaction({
      remove: rowData,
    });
    printResult(res);
  }, []);

  const onRemoveSelected = useCallback(() => {
    const selectedData = gridRef.current.api.getSelectedRows();
    const res = gridRef.current.api.applyTransaction({ remove: selectedData });
    printResult(res);
  }, []);



  const onSelectionChanged=(event)=>{   //선택한 행 함수처리 , 콘솔로 표시
    console.log(event.api.getSelectedRows())
  }

  return (
    <div style={containerStyle}>
        <div className="ag-theme-quartz-dark" style={{ height: 800, width: '100%' }}>
          <button onClick={openData}>DB불러오기</button><br/><br/>
          <button onClick={pushMeClicked}>선택취소</button>&nbsp;&nbsp;&nbsp;
          <button onClick={onRemoveSelected}>선택삭제</button>&nbsp;&nbsp;&nbsp;
          <button onClick={gridUpdate}>Grid Update</button>
          <button onClick={clearData}>Grid Clear</button>
          <button onClick={pushMeClicked}>DB업로드</button>
          <button onClick={pushMeClicked}>DB업데이트</button>
          <AgGridReact
            ref={gridRef} 
            //onCellClicked={cellClickedListener}   //셀클릭 리스너
            rowData={rowData}
            columnDefs={columnDefs}
            rowSelection={'multiple'}
            animateRows={false}
            defaultColDef={defaultColDef}
            gridOptions={GridOptions}
            onSelectionChanged={onSelectionChanged}    //선택한 행 함수처리
            //rowMultiSelectWithClick={true}   //여러 행 클릭하는대로 선택 
            enterNavigatesVertically={true}     //입력완료 후 셀 제자리
            //enterNavigatesVerticallyAfterEdit={true}    ///입력후 엔터 셀 아래로
            //onGridReady={onGridReady}
            suppressRowClickSelection={true}
          />
        </div>
      </div>

  );

};

export default Grid;
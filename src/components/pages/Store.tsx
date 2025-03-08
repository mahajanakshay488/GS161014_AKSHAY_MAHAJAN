import { useEffect } from "react"
import useAppStore from "../../states/AppStore"

import React, {
  useCallback,
  useState,
} from "react";
import {
  ColDef,
  GridReadyEvent,
} from "ag-grid-community";
import { StoreData } from "../../utilities/interfaces";
import Grid from "../common/Grid";


const columnDefs : ColDef[] =[
  {
    field: '',
    cellClass: 'flex items-center',
    width: 60,
    cellRenderer: (params: any) => {
      return (
        <span className="material-symbols-outlined">delete</span>
      )
    }
  },
  { 
    headerName: 'Seq. No',
    field: "SeqNo",
    width: 150,
    rowDrag: true,
  },
  { 
    headerName: 'Store',
    field: "Label", width: 250, 
    cellClass: 'border-0 border-r-2 border-gray-200', 
    headerClass: 'border-0 border-r-2 border-gray-200',
    resizable: false
  },
  { field: "City" },
  { field: "State", width: 100 }
];

export default function Store() {
  const {stores} = useAppStore();

  const [rowData, setRowData] = useState<StoreData[]>([]);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    setRowData(stores);
  }, [stores]);
  
  return (
    <>
      <section className="w-full h-[calc(100%-60px)] p-2">
      <Grid
          rowData= {rowData}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
        />
      </section>
        <div className="w-full h-[60px] flex items-center pl-2">
          <button className="text-lg font-medium px-4 py-2 bg-[#FFAB91] drop-shadow-md rounded-md uppercase" >New Store</button>
        </div>
    </>
  
  )
}

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
import AddButton from "../common/AddButton";


const columnDefs: ColDef[] = [
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
  const { stores } = useAppStore();
  const [openModal, setOpenModal] = useState(false);

  const [rowData, setRowData] = useState<StoreData[]>([]);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    setRowData(stores);
  }, [stores]);

  const addStore = () => {
    setOpenModal(true);
  }

  return (
    <>
      <section className="w-full h-[calc(100%-60px)] p-2">
        <Grid
          rowData={rowData}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
        />
      </section>
      <div className="w-full h-[60px] flex items-center pl-2">
        <AddButton onClick={addStore} >New Store</AddButton>
        <p className='pl-3 text-lg'>{openModal ? 'Open modal to add Store.' : ''}</p>
      </div>
    </>

  )
}

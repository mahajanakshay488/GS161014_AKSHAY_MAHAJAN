import React, { useCallback, useEffect, useState } from 'react'
import useAppStore from '../../states/AppStore';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { SkusData } from '../../utilities/interfaces';
import Grid from '../common/Grid';
import AddButton from '../common/AddButton';

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
    headerName: 'SKU',
    field: "Label",
    cellClass: 'border-0 border-r-2 border-gray-200',
    headerClass: 'border-0 border-r-2 border-gray-200',
    resizable: false
  },
  {
    field: "Price", width: 150,
    valueFormatter: p => '$ ' + p.value,
    cellClass: 'text-end'
  },
  {
    field: "Cost",
    width: 150,
    valueFormatter: p => '$ ' + p.value,
    cellClass: 'text-end'
  },
];

export default function SKU() {

  const { skus } = useAppStore();
  const [openModal, setOpenModal] = useState(false);

  const [rowData, setRowData] = useState<SkusData[]>([]);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    setRowData(skus);
  }, [skus]);

  const addSku = () => {
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
        <AddButton onClick={addSku} >New SKU</AddButton>
        <p className='pl-3 text-lg'>{openModal ? 'Open modal to add SKU.' : ''}</p>
      </div>
    </>
  )
}

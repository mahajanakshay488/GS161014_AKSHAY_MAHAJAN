import React, {
  useCallback,
  useState,
} from "react";
import {
  ColDef,
  ColGroupDef,
  GridReadyEvent,
} from "ag-grid-community";
import { getPlanningColDef } from "../../utilities/helpers";
import useAppStore from "../../states/AppStore";
import Grid from "../common/Grid";

export default function Planning() {
  const { calculations } = useAppStore();
  const planningColDef: any = getPlanningColDef();
  const [rowData, setRowData] = useState<any[]>();
  const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
    {
      headerName: 'Store',
      field: 'storeLabel',
      pinned: true
    },
    {
      headerName: 'SKU',
      field: 'skuLabel',
      pinned: true
    },
    ...planningColDef
  ]);
  const onGridReady = useCallback((params: GridReadyEvent) => {
    setRowData(calculations);
  }, [calculations]);

  return (
    <div className="w-full h-full p-2">
      <Grid
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
      ></Grid>
    </div>
  )
}

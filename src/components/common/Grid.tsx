import React, {
  useMemo,
} from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  ValidationModule,
  CellStyleModule,
  RowDragModule,
} from "ag-grid-community";
import { StoreData } from "../../utilities/interfaces";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ValidationModule,
  CellStyleModule,
  RowDragModule,
]);

export default function Grid(props: any) {
  const { columnDefs, rowData, onGridReady } = props;

  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  return (
    <div style={containerStyle}>
      <div style={{ height: "100%", boxSizing: "border-box" }}>
        <div style={gridStyle}>
          <AgGridReact<StoreData>
            rowData={rowData}
            columnDefs={columnDefs}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    </div>
  )
}

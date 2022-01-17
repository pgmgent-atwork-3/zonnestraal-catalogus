import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Op naam van', width: 150, editable: true, },
  { field: 'media.title', headerName: 'Title', type: 'object', width: 110, editable: true, },
  { field: 'created_on', headerName: 'Gereserveerd op', type: 'date', width: 200, editable: true, },
];

export default function DataTableBooks({ data }: any) {
  console.log(data);
  
  return (
    <div style={{ height: 200, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
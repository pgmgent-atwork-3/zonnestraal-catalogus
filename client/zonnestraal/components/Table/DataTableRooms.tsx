import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'id', headerName: 'RoomID', width: 90 },
  { field: 'name', headerName: 'Op naam van', width: 150, editable: true, },
  { field: 'media.title', headerName: 'Title', type: 'object', width: 110, editable: true, },
  { field: 'created_on', headerName: 'Gereserveerd op', type: 'date', width: 200, editable: true, },
  { field: 'from_date', headerName: 'Gereserveerd van', type: 'date', width: 200, editable: true, },
  { field: 'till_date', headerName: 'Gereserveerd tot', type: 'date', width: 200, editable: true, },
];

export default function DataTableRooms({ data }: any) {
  console.log(data);
  
  return (
    <div style={{ height: 530, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
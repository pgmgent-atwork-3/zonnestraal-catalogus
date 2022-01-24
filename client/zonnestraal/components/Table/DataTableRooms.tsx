import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { gql, useMutation } from '@apollo/client';
import { DeleteButton } from '../Buttons';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'id', headerName: 'RoomID', width: 90 },
  { 
    field: 'name', 
    headerName: 'Op naam van', 
    width: 200, 
    editable: true, 
  },
  { 
    field: 'room.title', 
    headerName: 'Title', 
    type: 'object', 
    width: 200, 
    editable: true, 
    renderCell: (params) => (params.row.room.title)
  },
  { 
    field: 'created_on', 
    headerName: 'Gereserveerd op', 
    type: 'date', 
    width: 200, 
    editable: true, 
    renderCell: (params) => new Date(params.row.created_on).toLocaleDateString()
  },
  { 
    field: 'from_date', 
    headerName: 'Gereserveerd van', 
    type: 'date', 
    width: 150, 
    editable: true, 
    renderCell: (params) => new Date(params.row.from_date).toLocaleDateString()
  },
  { 
    field: 'till_date', 
    headerName: 'Gereserveerd tot', 
    type: 'date', 
    width: 150, 
    editable: true, 
    renderCell: (params) => new Date(params.row.till_date).toLocaleDateString()
  },
  {
    field: 'delete',
    headerName: 'Acties',
    width: 150,
    renderCell: (cellValues) => {
      return (
        <DeleteButton title='Verwijder'/>
      )
    }
  }
];

export default function DataTableRooms({ rowsData }: any) {
  
  return (
    <div style={{ height: 530, width: '100%' }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        onCellClick={(params) => console.log(params)}/>
    </div>
  );
}
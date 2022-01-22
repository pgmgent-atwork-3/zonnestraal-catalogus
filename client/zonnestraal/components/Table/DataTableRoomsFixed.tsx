import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteButton, ExceptionsButton } from '../Buttons';
import { gql, useMutation } from '@apollo/client';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { 
    field: 'name', 
    headerName: 'Op naam van', 
    width: 150, 
    editable: true, 
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
    field: 'start_time', 
    headerName: 'Startuur', 
    type: 'date', 
    width: 100, 
    editable: true, 
  },
  { 
    field: 'end_time', 
    headerName: 'Einduur', 
    type: 'date', 
    width: 100, 
    editable: true, 
  },
  { 
    field: 'frequency', 
    headerName: 'Frequentie', 
    type: 'string', 
    width: 150, 
    editable: true, 
  },
  {
    field: 'exceptions',
    headerName: 'Uitzonderingen',
    width: 150,
    renderCell: (cellValues) => {
      return (
        <ExceptionsButton title='Uitzonderingen'/>
      )
    }
  },
  {
    field: 'delete',
    headerName: 'Verwijderen',
    width: 150,
    renderCell: (cellValues) => {
      return (
        <DeleteButton title='Verwijder'/>
      )
    }
  }
];

const DELETE_MEDIA_MUTATION = gql`
mutation {
  updateMediaRent(updateMediaRentInput: {
    id: 1
   returned: "Y"
  }){
    id
   returned
  }
}
` 

export default function DataTableRoomsFixed({ rowsData }: any) {
  const [mutate, { loading, error, data }] = useMutation(DELETE_MEDIA_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, failed to delete item!</p>;
  if (data) return <p>Your item is Deleted!</p>;

  
  return (
    <div style={{ height: 530, width: '100%' }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        onCellClick={(params) => { if(params.field == 'delete'){
          mutate({ variables: { id: params.id } })
        }}}
      />
    </div>
  );
}
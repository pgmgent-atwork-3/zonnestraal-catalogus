import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DeleteButton } from '../Buttons';
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
    field: 'media.title', 
    headerName: 'Title', 
    type: 'object', 
    width: 350, 
    editable: true, 
    renderCell: (params) => (params.row.media.title)
  },
  { 
    field: 'rent_from', 
    headerName: 'Gereserveerd van', 
    type: 'date', 
    width: 200, 
    editable: true, 
    renderCell: (params) => new Date(params.row.rent_from).toLocaleDateString()
  },
  { 
    field: 'rent_till', 
    headerName: 'Gereserveerd tot', 
    type: 'date', 
    width: 200, 
    editable: true, 
    renderCell: (params) => new Date(params.row.rent_till).toLocaleDateString()
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

export default function DataTableMedia({ rowsData }: any) {
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
        checkboxSelection
        disableSelectionOnClick
        onCellClick={(params) => { if(params.field == 'delete'){
          mutate({ variables: { id: params.id } })
        }}}
      />
    </div>
  );
}
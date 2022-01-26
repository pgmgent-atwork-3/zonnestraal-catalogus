import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
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
    field: 'title', 
    headerName: 'Titel', 
    type: 'object', 
    width: 550, 
    editable: true, 
    renderCell: (params) => (params.row.library.title)
  },
  { 
    field: 'created_on', 
    headerName: 'Gereserveerd op',
    width: 200, 
    renderCell: (params) => new Date(params.row.created_on).toLocaleDateString()
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 150,
    renderCell: (params) => {
      return (
        <DeleteButton title='Verwijder' />
      )
    }
  }
];

const CustomToolbar: React.FunctionComponent<{
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}> = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

const DELETE_LIBRARY_RESERVATION = gql`
mutation delete ( $id: Int! ) {
  removeLibraryReservation( id: $id){
    name
  }
}
` 

export default function DataTableBooks({ rowsData }: any) {
  const [filterButtonEl, setFilterButtonEl] =
  React.useState<HTMLButtonElement | null>(null);
  
  const [mutate, { loading, error, data }] = useMutation(DELETE_LIBRARY_RESERVATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, failed to delete item!</p>;
  if (data) return <p>Your item is Deleted!</p>;

  
  return (
    <div style={{ height: 560, width: '100%' }}>
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
        components={{
          Toolbar: CustomToolbar,
        }}
        componentsProps={{
          panel: {
            anchorEl: filterButtonEl,
          },
          toolbar: {
            setFilterButtonEl,
          },
        }}
      />
    </div>
  );
}
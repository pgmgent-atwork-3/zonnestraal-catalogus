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

const CustomToolbar: React.FunctionComponent<{
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}> = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);


const UPDATE_MEDIA_RENT_STATUS = gql`
mutation updateMediaRent($updateMediaRentInput: UpdateMediaRentInput!){
  updateMediaRent(updateMediaRentInput: $updateMediaRentInput){
    id
   returned
  }
}
` 

export default function DataTableMedia({ rowsData }: any) {
  const [filterButtonEl, setFilterButtonEl] =
  React.useState<HTMLButtonElement | null>(null);
  
  const [mutate, { loading, error, data }] = useMutation(UPDATE_MEDIA_RENT_STATUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, kon media niet verwijderen!</p>;
  if (data) return <p>De status van je media is aangepast!</p>;

  
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
          mutate({ 
            variables: { 
              updateMediaRentInput: {
                id: params.id
              }
             }})
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
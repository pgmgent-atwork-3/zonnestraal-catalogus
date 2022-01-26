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
    field: 'transport.title', 
    headerName: 'Title', 
    type: 'object', 
    width: 350, 
    editable: true, 
    renderCell: (params) => (params?.row.transport.title)
  },
  { 
    field: 'from_date', 
    headerName: 'Gereserveerd van', 
    type: 'date', 
    width: 200, 
    editable: true, 
    renderCell: (params) => new Date(params.row.from_date).toLocaleDateString()
  },
  { 
    field: 'till_date', 
    headerName: 'Gereserveerd tot', 
    type: 'date', 
    width: 200, 
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

const CustomToolbar: React.FunctionComponent<{
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}> = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

const DELETE_TRANSPORT_RESERVATION = gql`
mutation delete ( $id: Int! ) {
  removeTransportReservation(id: $id){
  name
  }
}
` 

export default function DataTableCars({ rowsData }: any) {
  const [filterButtonEl, setFilterButtonEl] =
  React.useState<HTMLButtonElement | null>(null);

  const [mutate, { loading, error, data }] = useMutation(DELETE_TRANSPORT_RESERVATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, failed to delete item!</p>;
  if (data) return <p>Je reservatie is verwijdert!</p>;
  
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
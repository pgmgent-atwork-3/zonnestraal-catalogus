import * as React from 'react';
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
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
    field: 'media.title', 
    headerName: 'Title', 
    type: 'object', 
    width: 270, 
    editable: true, 
    renderCell: (params) => (params.row.transport.title)
  },
  { 
    field: 'from_date', 
    headerName: 'Gereserveerd van', 
    type: 'date', 
    width: 150, 
    editable: true, 
  },
  { 
    field: 'till_date', 
    headerName: 'Gereserveerd tot', 
    type: 'date', 
    width: 150, 
    editable: true, 
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

const CustomToolbar: React.FunctionComponent<{
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}> = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

const REMOVE_TRANSPORT_FIXED_RESERVATION = gql`
mutation delete($id: Int!){
  removeTransportFixedReservation(id: $id){
   name
 }
}
` 

export default function DataTableCarsFixed({ rowsData }: any) {
  const [filterButtonEl, setFilterButtonEl] =
  React.useState<HTMLButtonElement | null>(null);
  
  const [mutate, { loading, error, data }] = useMutation(REMOVE_TRANSPORT_FIXED_RESERVATION);

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
        disableSelectionOnClick
        onCellClick={(params) => { if(params.field == 'delete'){
          mutate ({
            variables: {
              id: params.id
            }
          })
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
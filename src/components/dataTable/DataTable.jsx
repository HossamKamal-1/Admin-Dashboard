import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import './DataTable.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function DataTable({ slug, cols, rows }) {
  function handleDeleteClick(id) {
    console.log('has been deleted', id);
    // do delete request using axios for example
    // url/slug/id
  }
  const actionsCol = {
    field: 'actions',
    headerName: 'Actions',
    headerAlign: 'center',
    filterable: false,
    sortable: false,
    width: 150,
    align: 'center',
    renderCell: ({ row: { id } }) => (
      <div className="actions">
        <Link to={`/${slug}/${id}`}>
          <img src="view.svg" alt="view" />
        </Link>
        <img
          style={{ cursor: 'pointer' }}
          src="delete.svg"
          alt="delete"
          onClick={() => handleDeleteClick(id)}
        />
      </div>
    ),
  };

  return (
    <div className="data-grid">
      <DataGrid
        sx={{ bgcolor: 'white', p: '20px', height: '550px' }}
        rows={rows}
        columns={[...cols, actionsCol]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            sx: { flexDirection: 'row-reverse' },
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}
DataTable.propTypes = {
  slug: PropTypes.string.isRequired,
  cols: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};
export default DataTable;

import { useRef } from 'react';
import './UsersPage.scss';
import { AddForm, DataTable } from '../../components';
import useDocumentTitle from '../../hooks/useDocumentTitle';
const usersTableColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => (
      <img src={params.row.img || '/noavatar.png'} alt="avatar" />
    ),
  },

  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    type: 'string',
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    type: 'string',
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    type: 'string',
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 200,
    type: 'string',
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 150,
    type: 'boolean',
  },
];
function UsersPage() {
  useDocumentTitle();  
  const addFormRef = useRef(null);
  // fetch rows here from api instead of hard coded version
  const rows = [
    {
      id: 1,
      img: '',
      firstName: 'Jon',
      lastName: 'Snow',
      email: 'lewowi@zalligi.me',
      phone: '597 066 846',
      createdAt: '08.2.2071',
      verified: false,
    },
    {
      id: 2,
      img: '',
      firstName: 'Cersei',
      lastName: 'Lannister',
      email: 'akeipopo@kisircu.gq',
      phone: '502 590 063',
      createdAt: '09.3.2076',
      verified: false,
    },
    {
      id: 3,
      img: '',
      firstName: 'Jaime',
      lastName: 'Lannister',
      email: 'zocmi@zutup.fj',
      phone: '511 511 440',
      createdAt: '07.31.2074',
      verified: false,
    },
    {
      id: 4,
      img: '',
      firstName: 'Arya',
      lastName: 'Stark',
      email: 'zavvud@so.ee',
      phone: '515 267 759',
      createdAt: '09.11.2100',
      verified: false,
    },
    {
      id: 5,
      img: '',
      firstName: 'Daenerys',
      lastName: 'Targaryen',
      email: 'wewoem@zuzev.gt',
      phone: '593 538 744',
      createdAt: '09.13.2088',
      verified: true,
    },
    {
      id: 6,
      img: '',
      firstName: 'Cersei',
      lastName: 'Melisandre',
      email: 'leh@og.gu',
      phone: '536 026 380',
      createdAt: '04.4.2055',
      verified: false,
    },
    {
      id: 7,
      img: '',
      firstName: 'Ferrara',
      lastName: 'Clifford',
      email: 'kiza@aropogses.sx',
      phone: '552 292 488',
      createdAt: '10.22.2026',
      verified: true,
    },
    {
      id: 8,
      img: '',
      firstName: 'Rossini',
      lastName: 'Frances',
      email: 'soezeofi@nofmo.dk',
      phone: '598 142 037',
      createdAt: '08.15.2112',
      verified: false,
    },
    {
      id: 9,
      img: '',
      firstName: 'Harvey',
      lastName: 'Roxie',
      email: 'nadim@puk.ag',
      phone: '506 093 268',
      createdAt: '09.24.2112',
      verified: false,
    },
  ];
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button
          className="add-btn"
          onClick={() => addFormRef.current?.showAddForm()}
        >
          Add New Users
        </button>
      </div>
      <DataTable slug="users" cols={usersTableColumns} rows={rows} />
      <AddForm ref={addFormRef} cols={usersTableColumns} slug="users" />
    </div>
  );
}
export default UsersPage;

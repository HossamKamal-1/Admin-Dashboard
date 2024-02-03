import { Single } from '../../components';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { singleUser } from '../../utils/constants/data';
import './UserPage.scss';
function UserPage() {
  useDocumentTitle();
  // fetch data here
  return (
    <div className="user-wrapper">
      <Single {...singleUser} />
    </div>
  );
}

export default UserPage;

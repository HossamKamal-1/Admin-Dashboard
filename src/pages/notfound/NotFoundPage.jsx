import { Link } from 'react-router-dom';
import './NotFoundPage.scss';
import useDocumentTitle from '../../hooks/useDocumentTitle';
function NotFoundPage() {
  useDocumentTitle();  
  return (
    <div className="notfound">
      <div className="error">
        <p>
          <span>404</span> Page not found
        </p>
        <Link to="/" replace>
          Move to homepage
        </Link>
      </div>
    </div>
  );
}
export default NotFoundPage;

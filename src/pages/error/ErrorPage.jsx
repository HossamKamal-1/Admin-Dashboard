import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.scss';
function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="error-container">
      <div>
        <p className="error-title">Oops An Error Occurred</p>
        <p className="error">
          <span>{error.status} </span>
          {error.data}
        </p>
        <Link to="/" replace>
          Move to homepage
        </Link>
      </div>
    </div>
  );
}
export default ErrorPage;

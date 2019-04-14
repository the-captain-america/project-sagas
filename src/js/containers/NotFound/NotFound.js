
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <h1 className="error">404 Page Not Found</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <span
          style={{postion:'relative', top:100}}
          className="error-link">
          <Link to="/">
            Go back to homepage
          </Link>
        </span>
      </div>
    </div>
  </div>
);

export default NotFound;

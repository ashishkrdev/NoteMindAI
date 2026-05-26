import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';

function NotFound() {
  return (
    <>
      <Navbar />
      <main className="not-found">
        <div className="container">
          <h1>Page not found</h1>
          <p>The study space you are looking for is not available.</p>
          <Link className="btn btn-primary" to="/">
            Return home
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;

import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/appointment/new">New Appointment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/availability">Availability</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-text">
          Welcome, {user.name} &nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>
    </nav>
  );
}

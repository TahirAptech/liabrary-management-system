import { Link  } from "react-router-dom";

const Nav = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Dashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-item nav-link" to="/signup">Signup</Link>
            </li>
            <li>
              <Link className="nav-item nav-link" to="/weather">Weather</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Nav;
import {NavLink} from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid">
        <h1>Finance Tracker</h1>
        <div className="d-flex">
          <NavLink to="/categories" className="nav-link">Categories</NavLink>
          <NavLink to="/add" className="nav-link mx-4">Add</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const logout = () => {
    // remove the token from the local storage
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <button className="btn btn-outline-dark ml-2" onClick={logout}>
                Log out
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <div className="App container p-5">
        <h1>Welcome to the auth & auth review</h1>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

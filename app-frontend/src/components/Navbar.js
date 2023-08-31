import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('username') != null) {
      document.getElementById('logout_item').hidden = false;
    } else {
      document.getElementById('logout_item').hidden = true;
    }
  }, [localStorage.getItem('username')]);

  function clickHandler() {
    localStorage.clear();
    console.log("logout");
    navigate("/login");
  }
  function handleSystemClick() {
    const authority = localStorage.getItem('authority');
    if (authority === 'ADMIN') {
      navigate('/admin');
    } else if (authority === 'RECEPTIONIST') {
      navigate('/receptionist');
    } else if (authority === 'DOCTOR') {
      navigate('/doctor');
    } else if (authority === 'PHARMACIST') {
      navigate('/pharmacist');
    } else if (authority === 'LABINCHARGE') {
      navigate('/labincharge');
    } else if (authority === 'WARDINCHARGE') {
      navigate('/ward');
    } else {
      navigate('/login');
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm" style={{ backgroundColor: '#C7CFF4' }}>
        <div className="container">
          <a id="default" className="navbar-brand" onClick={handleSystemClick}>
            <h3>Hospital Management System</h3>
          </a>
          <div className="navbar-nav">
            <div className="nav-item dropdown" id='logout_item' hidden>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {localStorage.getItem('username')}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href='/profile'>
                  View Profile
                </a>
                <a className="dropdown-item" href='/profile/changepass'>
                  Change Password
                </a>
                <div className="dropdown-divider"></div>
                <button
                  id="logout_button"
                  className="dropdown-item btn btn-danger"
                  onClick={clickHandler}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar

import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom bg-gradient-green">
      <div className="container-fluid"> 
        
        <a className="navbar-brand ps-3" href="#">GO GREEN SOLAR</a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto pe-3">
            
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>

            {/* SERVICES MAIN DROPDOWN */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              
              {/* THE FIX: 'dropdown-menu-end' aligns the menu to the right edge */}
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Solar Installation</a></li>
                <li><a className="dropdown-item" href="#">Design and Quotation</a></li>
                
                {/* SUB-DROPDOWN: Repair or Rehabilitation */}
                <li className="position-relative"> 
                  <a className="dropdown-item dropdown-toggle" href="#">
                    Repair or Rehabilitation
                  </a>
                  {/* 'submenu-left' ensures this opens to the LEFT of the main menu */}
                  <ul className="dropdown-menu dropdown-submenu submenu-left">
                    <li><a className="dropdown-item" href="#">Defective Solar</a></li>
                    <li><a className="dropdown-item" href="#">Damaged Materials</a></li>
                    <li><a className="dropdown-item" href="#">Non Functional System</a></li>
                  </ul>
                </li>
                
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import '../Css/Header.css'
function Header() {
  return (
      <header className="sub-systems-header">

          <div className="options-subsystem-container">
              <i className="fa-solid fa-bars"></i>
              <p>DashBoard</p>
          </div>


          <div className="user-logo-header-container">
              <div className="user-logo-header">

              </div>
              <p>DashBoard</p>

          </div>
      

          <div className="right-header">
              <div className="notification-container">
                  <i className="fa-solid fa-bell"></i>
                    <span className="number-of-messages">10</span>

              </div>
              <div className="user-image-container"></div>
             <p className="user-name">Mr Goodman</p>
          </div>
      </header>
  );
}

export default Header;
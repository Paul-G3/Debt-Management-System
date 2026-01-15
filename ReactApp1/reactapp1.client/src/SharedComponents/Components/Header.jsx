
import '../Css/Header.css'
function Header() {
  return (
      <header className="sub-systems-header">

          <div className="options-subsystem-container">
              <i className="fa-solid fa-bars"></i>
          </div>

          <div className="user-logo-header">
             
          </div>

          <div className="right-header">
              <div className="user-image-container"></div>
             <p className="user-name">Mr Goodman</p>
          </div>
      </header>
  );
}

export default Header;
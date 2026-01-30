import '../Css/LandingNavr.css'
function LandingNavBar() {
  return (
      <header className="landing-header">
          <p className="sytem-name">
              <i className="fa-solid fa-feather"></i>
              PayMe
          </p>
          <ul className="header-right-nav">              
              <li>Services</li>
              <li>Login</li>
              <li>Trading</li>
          </ul>

          <p className="landing-ham-burger" onClick={() => alert("Clicked")}>
              <i className="fa-solid fa-bars"></i>
          </p>
      </header>
  );
}

export default LandingNavBar;
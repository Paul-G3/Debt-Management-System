import "../Css/Footer.css"

function Footer() {
  return (
      <div className="layout-footer">

          <div className="notification-item">
              <i className="fa-solid fa-house"></i>
              <p>Home</p>
          </div>

          <div className="notification-item">
              <i className="fa-solid fa-bell"></i>
              <p>Notifications</p>
          </div>

          <div className="notification-item">
              <i className="fa-solid fa-user"></i>
              <p>Account</p>
          </div>
      </div>
  );
}

export default Footer;
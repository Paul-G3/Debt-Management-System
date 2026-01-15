
import { NavLink } from "react-router-dom";
function CustomerSideNav() {
  return (
      <aside className="sidenav">
          <NavLink to="/Customer">Dashboard</NavLink>
          <NavLink to="/Customer/manage-pharmacy">Manage Pharmacy</NavLink>
          <NavLink to="/owner/settings">Settings</NavLink>
      </aside>
  );
}

export default CustomerSideNav;
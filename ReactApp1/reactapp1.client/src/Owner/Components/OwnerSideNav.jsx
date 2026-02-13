import { NavLink } from "react-router-dom";

function OwnerSideNav() { //side nav here with routes 
    return (

        //this is where the routing is mapping or id say defined for when a specific element is clicked it 
        //has something similar to you href here
        <aside className="sidenav">
            <NavLink
                to="/Owner"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </NavLink>

            <NavLink
                to="/Owner/Products"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <i className="fa-solid fa-wine-bottle"></i>
                <span>Products</span>
            </NavLink>

            <NavLink
                to="/Owner/Customers"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <i className="fa-solid fa-users"></i>
                <span>Customers</span>
            </NavLink>

            <NavLink
                to="/Owner/NewUser"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
               <i className="fa-solid fa-user" style={{fontSize:"1.6rem;"}}></i>
                <span>New User</span>
            </NavLink>

            <NavLink
                to="/Owner/settings"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                }
            >
                <i className="fa-solid fa-gear"></i>
                <span>Settings</span>
            </NavLink>

            <NavLink
                to="/logout"
                className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item logout-side-nav"
                }
            >
                <i className="fa-solid fa-arrow-right-from-bracket logout"></i>
                <span>LogOut</span>
            </NavLink>

      </aside>
  );
}

export default OwnerSideNav;
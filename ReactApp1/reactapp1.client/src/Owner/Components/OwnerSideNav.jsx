import { NavLink } from "react-router-dom";

function OwnerSideNav() { //side nav here with routes 
    return (

        //this is where the routing is mapping or id say defined for when a specific element is clicked it 
        //has something similar to you href here
      <aside className="sidenav">
          <NavLink to="/Owner">Owner</NavLink>
          <NavLink to="/Customer/manage-pharmacy">Products</NavLink>
      </aside>
  );
}

export default OwnerSideNav;
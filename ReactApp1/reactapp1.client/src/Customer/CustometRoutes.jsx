
import { Routes, Route } from "react-router-dom";
import CustomerLayout from '../SubSystemsLayout/CustomerLayout'
import DashBoadCustomer from '../Customer/Pages/DashBoardCustomer'
function CustometRoutes() {
    return (

        //this is where i called certain pages for a specific route
        //file path plus the component we are routing to   while still mainting the layout
      <Routes>
          <Route element={<CustomerLayout />}>
              <Route index element={<DashBoadCustomer />} />

              {/* /owner/manage-pharmacy */}
         {/*     <Route path="manage-pharmacy" element={<ManagePharmacy />} />*/}

          </Route>
      </Routes>
  );
}

export default CustometRoutes;
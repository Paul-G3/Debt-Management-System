import { Routes, Route } from "react-router-dom";
import OwnerLayout from '../SubSystemsLayout/OwnerLayout'
import DashBoard from '../Owner/Pages/DashBoard'
function OwnerRoutes() {
    return (

        //this is where the routinh happpens where we link specifi routes to specific pages 
        //not routs per say but your /forward slash something
      <Routes>
          <Route element={<OwnerLayout />}>
                <Route index element={<DashBoard />} />

              {/* /owner/manage-pharmacy */}
              {/*<Route path="manage-pharmacy" element={<ManagePharmacy />} />*/}

          </Route>
      </Routes>
  );
}

export default OwnerRoutes;
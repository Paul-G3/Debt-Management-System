import { Routes, Route } from "react-router-dom";
import OwnerLayout from '../SubSystemsLayout/OwnerLayout'
import DashBoard from '../Owner/Pages/DashBoard'
import Customers from '../Owner/Pages/Customerrs'
import Products from '../Owner/Pages/Products'

function OwnerRoutes() {
    return (

        //this is where the routinh happpens where we link specifi routes to specific pages 
        //not routs per say but your /forward slash something
      <Routes>
          <Route element={<OwnerLayout />}>
                <Route index element={<DashBoard />} />
                <Route path="Customers" element={<Customers />} />
                <Route path="Products" element={<Products />} />

          </Route>
      </Routes>
  );
}

export default OwnerRoutes;

import { Outlet } from "react-router-dom";
import Header from "../SharedComponents/Components/Header";
import CustomrSideNav from '../Customer/Components/CustomerSideNav'
function CustomerLayout() {
  return (
      <>

          <Header />

          <div className="Layout">
              <CustomrSideNav />
              <main className="content">
                  <Outlet /> 
              </main>
          </div>
      </>
  );
}

export default CustomerLayout;
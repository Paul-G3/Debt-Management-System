
import { Outlet } from "react-router-dom";
import Header from "../SharedComponents/Components/Header";
import CustomrSideNav from '../Customer/Components/CustomerSideNav'
import Footer from "../SharedComponents/Components/Footer";
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

          <Footer />
      </>
  );
}

export default CustomerLayout;
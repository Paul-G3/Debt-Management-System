import { Outlet } from "react-router-dom";
import Header from "../SharedComponents/Components/Header";
import OwnerSideNav from "../Owner/Components/OwnerSideNav";

function OwnerLayout() {
  return (
      <>
          <Header />
          <div className="Layout">
              <OwnerSideNav />
              <main className="content">
                  <Outlet />
              </main>
          </div>
      </>
  );
}

export default OwnerLayout;
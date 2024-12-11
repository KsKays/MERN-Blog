import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Content Section */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Routers from "../routers/Routers";

import AdminNav from "../admin/AdminNav";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      <div>
        <Routers></Routers>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

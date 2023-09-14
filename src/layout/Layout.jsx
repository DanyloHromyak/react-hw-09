import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <header className="my-5">
      <Navbar />
      <Outlet />
    </header>
  );
};
export default Layout;

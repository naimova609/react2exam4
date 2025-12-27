import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="p-10">
      </header>
      <Outlet />
      <footer className="p-10"></footer>
    </div>
  );
};

export default Layout;

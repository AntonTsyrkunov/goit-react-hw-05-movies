import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Nav, NavLink } from 'styles/Nav.styled';

const Layout = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

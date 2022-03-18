import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => (
  <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
    </header>
    <Outlet />
  </>
);

export default Navigation;

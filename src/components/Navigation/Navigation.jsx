import { Outlet } from 'react-router-dom';
import { Header, NavLinkStyled } from './Navigation.styled';

const Navigation = () => (
  <>
    <Header>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </nav>
    </Header>
    <Outlet />
  </>
);

export default Navigation;

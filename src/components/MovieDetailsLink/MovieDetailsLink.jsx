import PropTypes from 'prop-types';
import { NavLinkList, NavLinkStyled } from './MovieDetailsLink.styled';

export default function MovieDetailsLink({ state }) {
  return (
    <NavLinkList>
      <li>
        <NavLinkStyled to={`cast`} state={state}>
          Cast
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to={`reviews`} state={state}>
          Reviews
        </NavLinkStyled>
      </li>
    </NavLinkList>
  );
}

MovieDetailsLink.propTypes = {
  state: PropTypes.object.isRequired,
};

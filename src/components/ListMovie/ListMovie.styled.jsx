import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(187px, 1fr));
  grid-gap: 16px;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  position: reletive;
`;
export const MovieItem = styled.li`
  font-size: 16px;
  color: rgba(0, 87, 184, 0.7);
  text-align: center;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;
export const MovieItemImage = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
`;
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: currentColor;
  &:hover {
    color: rgba(255, 215, 0, 0.7);
  }
`;
export const Title = styled.p`
  margin: 0;
  padding: 5px;
`;

import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  margin-right: 10px;
  font: inherit;
  color: currentColor;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

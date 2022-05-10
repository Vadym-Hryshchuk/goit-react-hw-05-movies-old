import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const SearchBarButton = styled.button`
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

export const SearchBarInput = styled.input`
  font-size: 20px;
  padding: 5px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

import styled from 'styled-components';
export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 10px;
  list-style: none;
  background-color: rgba(128, 128, 128, 0.1);

  li {
    margin: 15px;
    flex-basis: calc((100% - 150px) / 5);
  }

  img {
    display: block;
    width: 100%;
    background-color: rgba(128, 128, 128, 1);
  }
  p {
    margin: 0;
    padding: 5px;
    text-align: center;
    background-color: rgba(128, 128, 128, 0.5);
  }
`;

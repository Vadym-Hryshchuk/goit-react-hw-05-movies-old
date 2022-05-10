import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 5px;
`;
export const PosterImg = styled.img`
  width: 300px;
`;
export const Wrapper = styled.div`
  padding: 10px;
  h1 {
    margin: 0 0 10px;
    text-align: center;
    text-transform: uppercase;

    text-shadow: 0 1px 0 #206dfd, 0 2px 0 #02fd16, 0 3px 0 #ffee00,
      0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3),
      0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
`;

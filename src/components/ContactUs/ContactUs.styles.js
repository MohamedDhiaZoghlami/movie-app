import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--thirdGrey);
`;
export const Content = styled.div`
  width: 80%;
  margin-top: 8rem;
  margin-bottom: 8rem;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    filter: drop-shadow(0 0 0.75rem #e8e8e8);
    width: 100%;
    height: 100%;
  }
`;

export const Right = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  h1 {
    padding: 1.28rem;
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
    padding: 1.28rem;
  }
  @media screen and (max-width: 768px) {
    h1 {
      padding: 1rem;
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
`;

export const Boxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    color: var(--primaryRed);
    font-size: 4rem;
    font-weight: 800;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }
  h4 {
    color: var(--white);
    font-size: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

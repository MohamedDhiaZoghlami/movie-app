import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 5rem 2rem;
  background: var(--fourthGrey);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Text = styled.div`
  flex: 60%;
  p {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    flex: 100%;
    p {
      font-size: 1.4rem;
    }
  }
`;
export const IconBox = styled.div`
  flex: 10%;
  margin-left: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
  div {
    cursor: pointer;
  }
`;

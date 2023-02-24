import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#141414;
  padding-bottom:10rem;
  iframe {
    width:65%;
    height:50rem;
    border:none;
    @media screen and (max-width:768px) {
      width:85%;
      height:40rem;
    }
  }
  @media screen and (max-width:768px) {
    padding-bottom:2rem;
  }
`;

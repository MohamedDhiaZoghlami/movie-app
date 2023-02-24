import styled from "styled-components";
import image from "../../Images/hello.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url(${image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
`;

export const Content = styled.div`
  height: 40%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 5rem;
      @media screen and (max-width: 768px) {
        font-size: 4rem;
      }
    }
    p {
      color: var(--primaryRed);
      font-weight: 800;
      font-size: 2rem;

      .link {
        cursor: pointer;
        text-decoration:none;
        color: var(--primaryRed);
      }
      @media screen and (max-width: 768px) {
        font-size: 1.6rem;
      }
    }
  }
`;

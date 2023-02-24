import styled from "styled-components";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

export const Wrapper = styled.div`
  padding: 1rem 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  background: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(1rem);
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
  h1 {
    color: var(--primaryRed);
    cursor: pointer;
    font-size: 3rem;
    font-weight: 900;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      margin-left: 3.5rem;
      font-size: 1.6rem;
      .link {
        text-decoration: none;
        color: var(--white);
        transition: ease-in-out 0.3s;
        :hover {
          color: var(--primaryRed);
          transition: ease-in-out 0.3s;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .navhidden {
      position: absolute;
      top: -1000px;
      left: -0rem;
      padding: 0rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 90vh;
      width: 100vw;
      z-index: 1000;
      transition: ease-in-out 0.6s;
      background: rgba(20, 20, 20, 0.5);
      backdrop-filter: blur(1rem);
      li {
        padding: 10px;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        transition: ease-in-out 0.3s;
        :hover {
          transition: ease-in-out 0.3s;
        }
        link:hover {
          color: var(--white);
        }
      }
    }
    .navshown {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 91vh;
      width: 100vw;
      z-index: 1000;
      position: absolute;
      top: 6rem;
      left: -0rem;
      padding: 0rem;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(1rem);
      transition: ease-in-out 0.6s;
      li {
        padding: 20px;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-left: 0;
        transition: ease-in-out 0.3s;
        :hover {
          transition: ease-in-out 0.3s;
        }
        link:hover {
          color: var(--white);
        }
      }
    }
  }
`;
export const HamBars = styled(FaBars)`
  width: 30px;
  height: 30px;
  display: none;
  color: var(--white);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const CloseBtn = styled(FaRegWindowClose)`
  width: 30px;
  height: 30px;
  display: none;
  color: var(--white);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

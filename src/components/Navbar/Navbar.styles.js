import styled from "styled-components";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

export const Wrapper = styled.div`
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
  width: 100%;
  position: fixed;
  z-index: 90;
  background: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(1rem);
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
export const Content = styled.div`
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .link {
    text-decoration: none;
  }
  h1 {
    color: var(--primaryRed);
    cursor: pointer;
    font-size: 3rem;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;
export const Mid = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  ul {
    display: flex;
    align-items: center;
    width: 100%;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 80vh;
      width: 100vw;
      background: var(--primaryGrey);
      z-index: 1000;
      transition: ease-in-out 0.6s;
      li {
        flex: 10%;
        font-size: 2rem;
        border-bottom: 1px solid var(--primaryRed);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        transition: ease-in-out 0.3s;
        :hover {
          background: var(--primaryRed);
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
      height: 80vh;
      width: 100vw;
      z-index: 1000;
      position: absolute;
      top: 7rem;
      left: 0;
      background: var(--primaryGrey);
      transition: ease-in-out 0.6s;
      li {
        flex: 10%;
        font-size: 2rem;
        border-bottom: 1px solid var(--primaryRed);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        transition: ease-in-out 0.3s;
        :hover {
          background: var(--primaryRed);
          transition: ease-in-out 0.3s;
        }
        link:hover {
          color: var(--white);
        }
      }
    }
  }
`;

export const Right = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .toggleBtn {
    height: 3.5rem;
    width: 3.5rem;
  }
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
  }
`;

export const HamBars = styled(FaBars)`
  width: 100%;
  height: 100%;
  display: none;
  color: var(--white);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const CloseBtn = styled(FaRegWindowClose)`
  width: 100%;
  height: 100%;
  display: none;
  color: var(--white);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

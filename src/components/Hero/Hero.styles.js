import styled from "styled-components";
import { FaChevronLeft, FaChevronRight, FaRegPlayCircle } from "react-icons/fa";

export const Wrapper = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  background: var(--darkGrey);
  @media screen and (max-width: 768px) {
    height: 90vh;
  }
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 0.6s all ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  .btn {
    flex: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  flex: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Left = styled.div`
  flex: 50%;
  h1 {
    color: var(--primaryRed);
    font-size: 3rem;
    font-weight: 800;
  }
  p {
    color: var(--white);
    font-size: 1.5rem;
    max-width: 80%;
  }
  h2 {
    color: var(--white);
    span {
      color: var(--primaryRed);
    }
  }
  button {
    padding: 1rem 2.5rem;
    background-color: var(--primaryRed);
    color: var(--white);
    font-size: 2rem;
    border: none;
    cursor: pointer;
    transition: 0.5s all ease-in-out;
    :hover {
      background-color: var(--secondaryRed);
      transition: 0.5s all ease-in-out;
    }
  }
`;
export const Right = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.button`
  background: transparent;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s all ease-in-out;
  :hover {
    background-color: var(--primaryRed);
    transition: 0.7s all ease-in-out;
  }
`;

export const LeftArrow = styled(FaChevronLeft)`
  width: 80%;
  height: 80%;
  color: white;
`;

export const RightArrow = styled(FaChevronRight)`
  width: 80%;
  height: 80%;
  color: white;
`;

export const TrailerBtn = styled.button`
  background: transparent;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  font-size: 6rem;
  padding: 1.5rem 2rem;
  border: none;
  cursor: pointer;
  transition: 0.7s all ease-in-out;
  h3 {
    font-size: 2rem;
  }
  :hover {
    color: var(--primaryRed);
    transition: 0.7s all ease-in-out;
  }
`;

export const Play = styled(FaRegPlayCircle)`
  margin-right: 2rem;
`;

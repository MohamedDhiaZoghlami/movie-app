import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--primaryGrey);
  padding: 1rem;
  .header {
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:95%;
    button {
      color:var(--primaryRed);
      background:transparent;
      padding:1rem;
      border:none;
      cursor: pointer;
      font-size:1.7rem;
      font-weight:600;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: nowrap;
  position: relative;
  overflow-x: hidden;
  position:relative;
  @media screen and (max-width:768px) {
    flex-wrap:wrap;
    height:40rem;
    justify-content:center;
    width:100%;
  }
`;

export const Slide = styled.div`
  margin-right: 2rem;
  flex-shrink: 0;
  width: 27rem;
  height: 30rem;
  background-position: center;
  background-size: cover;
  transition: 0.5s all ease-in-out;
  padding: 1rem;
  cursor: pointer;
  button {
    visibility: hidden;
    padding: 1rem;
    background-color: var(--primaryRed);
    color: var(--white);
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }
  h2 {
    font-size: 1.65rem;
    color: var(--white);
  }
  h3 {
    font-size: 1.5rem;
    color: var(--white);
    span {
      color: var(--primaryRed);
    }
  }
  :hover {
    opacity: 0.7;
    button {
      visibility: visible;
    }
  }
  @media screen and (max-width:768px) {
    width: 14.5rem;
    height: 20rem;
    margin-bottom:1rem;
  }
`;

export const Nextbtn = styled(FaChevronRight)`
  color: white;
  height: 4rem;
  width: 4rem;
  position: absolute;
  z-index: 100;
  background-color: var(--secondaryGrey);
  right: 0;
  top: 12rem;
  cursor: pointer;
  padding: 0.75rem;
  @media screen and (max-width: 768px) {
    height: 2.5rem;
    width: 2.5rem;
    padding:0.25rem;
    display:none;
  }
`;

export const Prevbtn = styled(FaChevronLeft)`
  color: white;
  height: 4rem;
  width: 4rem;
  position: absolute;
  z-index: 100;
  background-color: var(--secondaryGrey);
  left: 0;
  top: 12rem;
  cursor: pointer;
  padding: 0.75rem;
  @media screen and (max-width: 768px) {
    height: 2.5rem;
    width: 2.5rem;
    padding:0.25rem;
  }
`;

export const Dropdown = styled.div`
  width:100%;
  height:200px;
  background-color:#fafafa;
`;
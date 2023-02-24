import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--primaryGrey);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: var(--secondaryGrey);
  width: 65%;
  margin: 10rem;
  box-shadow: 0.5rem 1rem 1.8rem var(--medGrey);
  .btn {
    margin: 2rem auto;
    width: 90%;
  }
  @media screen and (max-width:768px) {
      width:80%;
      margin:10rem 2rem;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.6rem;
  border-bottom: 0.1rem solid var(--primaryGrey);
  p {
    flex: 55%;
    margin-left: 2rem;
    font-weight: 600;
    font-size: 2rem;
  }
  .box {
    flex: 15%;
    display: flex;
    justify-content: center;
  }
  h3 {
    border: none;
    background: var(--primaryRed);
    color: var(--white);
    padding: 1.6rem;
    font-size:1.6rem;
    font-weight: 800;
    @media screen and (max-width:768px) {
        padding:0.4rem;
        font-size:1rem;
    }
  }
  h1 {
    font-size: 2rem;
  }
  :first-child {
    border: none;
  }
  @media screen and (max-width:768px) {
      h1 {
          font-size:1rem;
      }
      p {
          font-size:1.4rem;
      }
  }
`;

export const MoneyBox = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Money = styled.div`
  background: var(--primaryGrey);
  padding: 0.5rem;
  width: 30%;
  p {
    border-bottom:0.1rem var(--primaryRed) solid;
    font-weight:600;
    padding: 0.3rem;
    font-size: 1.5rem;
  }
  span {
    font-size: 2rem;
  }
  h1 {
    font-size: 3rem;
  }
  @media screen and (max-width:768px) {
      p {
          font-size:1rem;
      }
      h1 {
          font-size:2rem;
      }
      span {
          font-size:1.5rem;
      }
  }
`;

export const Btn = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--primaryRed);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  transition: ease-in-out 0.4s;
  :hover {
    transition: ease-in-out 0.4s;
    background: var(--secondaryRed);
  }
  @media screen and (max-width:768px) {
      font-size:1.5rem;
  }
`;

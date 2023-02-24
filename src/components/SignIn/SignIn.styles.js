import styled from "styled-components";
import image from "../../Images/background_image.jpg";

export const Wrapper = styled.div`
    max-width:100%;
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.75) 100%
    ),
    url(${image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
`;

export const Container = styled.div`
    width:25%;
    padding:3rem;
    backdrop-filter: blur(3rem);
    min-width:32rem;
    label {
        color:#bdc3c7;
        font-size:1.5rem;
    }
    input {
        width:90%;
        height:3rem;
        margin-top:2rem;
        margin-bottom:2rem;
        border:0;
        background:#fafafa;
        :focus {
            outline:none;
        }
    }
    #pwd {
        margin-bottom:0.25rem;
    }
    #checkme {
        width:10%;
        height:1.5rem;
    }
    button {
      padding:0.75rem 2rem;
      background-color:var(--primaryRed);
      color:var(--white);
      font-size:2rem;
      border:none;
      cursor: pointer;
      transition:0.5s all ease-in-out;
      margin:2rem 0;
      :hover {
          background-color:var(--secondaryRed);
          transition:0.5s all ease-in-out;
      }
  }
  p {
      color:var(--primaryRed);
      font-size:1.25rem;
      cursor:pointer;
  }
`;
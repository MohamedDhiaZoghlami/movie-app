import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    padding:4rem 0;
    background:#141414;
`;

export const Content = styled.div`
    width:90%;
    h1 {
        color:var(--white);
        text-transform:uppercase;
        font-size:3.5rem;
    }

    h2 {
        color:var(--white);
        font-size:1.7rem;
    }

    h4 {
        color:var(--primaryRed);
        font-size:2rem;
        span {
            color:white;
        }
    }
    h3 {
        color:var(--primaryRed);
        font-size:2rem;
        span {
            color:white;
        }
    }
    p {
        font-size:1.5rem;
        max-width:80%;
    }
`;
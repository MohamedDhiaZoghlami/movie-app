import styled from "styled-components";

export const AccordionSection = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:var(--primaryGrey);
`;

export const Container = styled.div`
    width:60%;
    margin-top:8rem;
    margin-bottom:8rem;
    @media screen and (max-width:768px) {
        width:80%;
    }
`;

export const Wrap = styled.div`
    background:var(--secondaryGrey);
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    cursor: pointer;
    margin-top:2rem;
    border-radius:0.5rem;
    h1 {
        padding:1.28rem;
        font-size:2.5rem;
    }
    span {
        margin-right:2.4rem;
        background-color:var(--primaryRed);
        display:flex;
        justify-content:center;
        align-items:center;
    }
    :hover {
        opacity:0.7;
    }
    @media screen and (max-width:768px) {
        h1 {
            font-size:1.3rem;
            padding:0.65rem;
        }
        span {
            margin-right:1.2rem;
        }
    }
`;

export const Dropdown = styled.div`
    padding:1.6rem;
    background-color:var(--secondaryGrey);
    border-top:black 0.2rem solid;
    p {
        font-size:1.6rem;
    }
    @media screen and (max-width:768px) {
        padding:0.8rem;
        p {
            font-size:1rem;
        }
    }
`;
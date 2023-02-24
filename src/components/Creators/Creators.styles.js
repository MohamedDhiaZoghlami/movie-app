import styled from "styled-components";
import image from '../../Images/man.jpg';

export const Wrapper = styled.div`
    width:100%;
    background-color:var(--primaryGrey);
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Content = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin:8rem 0;
`;

export const Top = styled.div`
    flex:25%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:5rem;
    margin-bottom:5rem;
    h1 {
        font-size:5rem;
        text-align:center;
    }
    p {
        max-width:50%;
        text-align:center;
        font-size:2rem;
    }
    @media screen and (max-width:768px) {
        h1 {
            font-size:3.5rem;
        }
        p {
            font-size:1.5rem;
        }
    }
`;

export const Bottom = styled.div`
    flex:75%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const Box = styled.div`
    width:80%;
    display:grid;;
    grid-template-columns:repeat(auto-fill,minmax(25rem,1fr));
    grid-gap : 2.5rem;
    @media screen and (max-width:768px) {
        width:60%;
    }
`;

export const ContentBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    transition:ease-in-out 0.5s;
    :hover {
        transform : scale(1.1);
        transition:ease-in-out 0.5s;
    }
`;

export const Image = styled.img`
     flex-basis:90%;
`;

export const Text=styled.div`
    flex-basis:10%;
    h1 {
        color:var(--primaryRed); 
        font-size:2.5rem; 
        @media screen and (max-width:768px) {
            font-size:1.6rem;
        }
    }
    h2 {
        font-size:3rem;
        color:var(--white);
        @media screen and (max-width:768px) {
            font-size:2.5rem;
        }
    }
`;
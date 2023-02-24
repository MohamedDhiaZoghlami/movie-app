import styled from "styled-components";

export const Wrapper = styled.div`
    color:var(--white);
    background : var(--primaryGrey);
    padding:.5rem;
    margin-bottom:5rem;
    text-align:center;
    h3 {
        margin : 10px 0 0 0 ;
        font-size:2rem;
    }
    p {
        margin:5px 0;
        font-size:1.5rem;
    }
`;
export const Image = styled.img`
    display : block;
    width:100%;
    height:200px;
    object-fit:cover;
`;
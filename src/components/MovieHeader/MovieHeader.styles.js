import styled from "styled-components";
export const Wrapper = styled.div`
    width:100%;
    height:70vh;
    background :linear-gradient(to left , rgba(0,0,0,0.5) 50% , rgba(0,0,0,0.75) 100%),url(${({image})=>image}), var(--darkGrey);
    background-size:100% , cover;
    background-position : center;
`;

export const Content = styled.div`
    
`;
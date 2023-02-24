import styled from "styled-components";

export const Image=styled.img`
    width:100%;
    max-width:360px;
    transition: all 0.3s;
    object-fit:fill;
    animation : animateThumb 0.5s;
    position:relative;
    :hover {
        opacity:0.8;
    }
    @keyframes animateThumb {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
`;

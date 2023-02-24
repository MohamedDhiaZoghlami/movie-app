import styled from "styled-components";

export const Wrapper = styled.div`
  background:url(${({image})=>image});
  background-size: contain;
  background-repeat:no-repeat;
  background-position: center;
  /* width:250px; */
  max-width: 360px;
  transition: all 0.3s;
  animation: animateThumb 0.5s;
  position: relative;
  height:32rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

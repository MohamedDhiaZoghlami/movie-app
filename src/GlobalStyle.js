import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth:1280px;
        --white : #fff;
        --lightGrey : #eee;
        --medGrey : #353535;
        --darkGrey : #1c1c1c;
        --fontSuperBig : 2.5rem;
        --fontBig : 1.5rem;
        --fontMed : 1.2rem;
        --fontSmall : 1rem;
        --primaryRed:#e50914;
        --secondaryRed:#96281b;
        --primaryGrey:#141414;
        --secondaryGrey:#272727;
        --thirdGrey:#191919;
        --fourthGrey:#1c1c1c;
    }
    * {
        box-sizing : border-box;
        font-family: 'Poppins', sans-serif;
    }

    html {
      font-size:10px;
    }
    body {
        margin : 0 ;
        padding : 0 ;
        background-color:var(--secondaryGrey);
        position:relative;
        min-height:100vh;

        h1 {
            font-size : 2rem;
            font-weight:600;
            color : var(--white);
        }

        h3 {
            font-size:1.1rem;
            font-weight:600;
        }

        p {
            font-size : 1rem;
            color : var(--white);
        }


    }
    /* width */
    ::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #444;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #e50914;
  border-radius:15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  opacity:0.5;
}

`;

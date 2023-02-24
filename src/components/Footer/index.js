import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";
import { Wrapper, Content, Text, IconBox } from "./Footer.styles";

function Footer() {
  return (
    <IconContext.Provider value={{ color: "white", size: "30px" }}>
      <Wrapper>
        <Content>
          <Text>
            <p>
              © 2023. This was for Learning purposes and i have used TMDB API to
              create this, please check them out and i would like to thank the
              team behind this api for making it possible to try new stuff for
              free.
            </p>
          </Text>
          <IconBox>
            <div>
              <FaTwitter
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "red")}
              />
            </div>
            <div>
              <FaFacebook
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "red")}
              />
            </div>
            <div>
              <FaGooglePlus
                onMouseOut={({ target }) => (target.style.color = "white")}
                onMouseOver={({ target }) => (target.style.color = "red")}
              />
            </div>
          </IconBox>
        </Content>
      </Wrapper>
    </IconContext.Provider>
  );
}

export default Footer;

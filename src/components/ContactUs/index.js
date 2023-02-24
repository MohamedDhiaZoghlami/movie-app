import React from "react";
import {
  Wrapper,
  Content,
  Left,
  Right,
  Text,
  Box,
  Boxes,
} from "./ContactUs.styles";
import image from "../../Images/tn-pic.png";

function ContactUs() {
  return (
    <Wrapper>
      <Content>
        <Left>
          <img src={image} alt='tunisia-map' />
        </Left>
        <Right>
          <Text>
            <h1>Contact Us Here</h1>
            <p>
              Streamit is located in Los Angeles city and you can contact us at
              hello@streamit.com for any tech-related support and assistance. We
              love to hear from our Streamit users.
            </p>
          </Text>
          <Boxes>
            <Box>
              <h1>4</h1>
              <h4>Branch</h4>
            </Box>
            <Box>
              <h1>500+</h1>
              <h4>Employee</h4>
            </Box>
            <Box>
              <h1>1,000+</h1>
              <h4>Clients</h4>
            </Box>
          </Boxes>
        </Right>
      </Content>
    </Wrapper>
  );
}

export default ContactUs;

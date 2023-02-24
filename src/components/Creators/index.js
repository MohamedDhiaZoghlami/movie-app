import React from "react";
import {
  Wrapper,
  Content,
  Top,
  Bottom,
  Box,
  ContentBox,
  Text,
  Image,
} from "./Creators.styles";
import image from "../../Images/man.jpg";

function Creators() {
  return (
    <Wrapper>
      <Content>
        <Top>
          <h1>Masterminds Team</h1>
          <p>
            Your Streamit is build by one of the best and well experienced web
            developers and an awarded Envato Elite Author.
          </p>
        </Top>
        <Bottom>
          <Box>
            <ContentBox>
              <Image src={image} alt='person' />
              <Text>
                <h1>CEO</h1>
                <h2>Dzovi</h2>
              </Text>
            </ContentBox>
            <ContentBox>
              <Image src={image} alt='person' />
              <Text>
                <h1>Designer</h1>
                <h2>Dzovi</h2>
              </Text>
            </ContentBox>
            <ContentBox>
              <Image src={image} alt='person' />
              <Text>
                <h1>Developer</h1>
                <h2>Dzovi</h2>
              </Text>
            </ContentBox>
            <ContentBox>
              <Image src={image} alt='person' />
              <Text>
                <h1>DevOps</h1>
                <h2>Dzovi</h2>
              </Text>
            </ContentBox>
          </Box>
        </Bottom>
      </Content>
    </Wrapper>
  );
}

export default Creators;

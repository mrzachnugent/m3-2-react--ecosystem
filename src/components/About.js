import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  padding-top: 30px;
  font-family: Raleway, sans-serif;
`;

const Container = styled.div`
  max-width: 1170px;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const About = () => {
  return (
    <Container>
      <Paragraph>
        Fruit emporium is founded on a very simple principle:{" "}
        <strong>Fruit is good.</strong>
      </Paragraph>
      <Paragraph>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </Paragraph>
    </Container>
  );
};

export default About;

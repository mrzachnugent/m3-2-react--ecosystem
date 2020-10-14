import React from "react";
import styled from "styled-components";
import { items } from "../data";
import ListingGrid from "./ListingGrid";

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

const FoodGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1170px;
  margin: 50px auto 0 auto;
`;

const Homepage = () => {
  return (
    <Container>
      <Paragraph>
        Fruit emporium sells the finest fruits from this world and beyond.
      </Paragraph>
      <Paragraph>
        <strong>Browse items:</strong>
      </Paragraph>
      <FoodGrid>
        {Object.values(items).map((item) => {
          return <ListingGrid itemList={item} />;
        })}
      </FoodGrid>
    </Container>
  );
};

export default Homepage;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FruitCard = styled.div`
  a {
    text-decoration: none;
    color: #000;
  }
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1), 0 -1px 25px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 45px;
  border-radius: 15px;
  text-align: center;
  font-family: Raleway, sans-serif;
`;

const FruitImage = styled.img`
  width: 205px;
  border-radius: 15px;
  margin: -25px auto 0 auto;
`;

const FruitName = styled.h2`
  font-size: 30px;
  margin: 15px 0;
`;

const Seperator = styled.div`
  width: 50px;
  height: 4px;
  background: #ccc;
  margin: 0 auto;
  border-radius: 50%;
`;

const LatinName = styled.p`
  opacity: 0.6;
`;

const ListingGrid = ({ itemList }) => {
  const { imageSrc, name, latinName, id } = itemList;
  return (
    <FruitCard>
      <Link to={`/items/${id}`}>
        <FruitImage src={imageSrc} alt="fruit-img" />
        <FruitName>{name}</FruitName>
        <Seperator />
        <LatinName>{latinName}</LatinName>
      </Link>
    </FruitCard>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default ListingGrid;

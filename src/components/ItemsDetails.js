import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";
import { Link } from "react-router-dom";

const ItemPage = styled.div`
  max-width: 1170px;
  min-height: 80vh;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemCard = styled.div`
  font-family: Raleway, sans-serif;
  display: flex;
`;

const DescriptionContainer = styled.div`
  width: 300px;
  padding-left: 45px;
`;

const FruitImage = styled.img`
  width: 400px;
  border-radius: 15px;
`;

const FruitName = styled.h2`
  font-size: 36px;
  margin: 0;
`;

const LatinName = styled.p`
  font-style: italic;
  opacity: 0.7;
  margin: 3px 0 25px 0;
`;

const FruitDescription = styled.p`
  font-size: 16px;
`;
const FruitOrigin = styled.p`
  font-style: italic;
  color: #333;
  padding-bottom: 25px;
`;
const BuyNowButton = styled.button`
  background: #4700e0;
  color: #fff;
  border: none;
  padding: 18px 60px;
  border-radius: 10px;
  font-size: 21px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
const SellerInfo = styled.div`
  display: flex;
  padding-top: 25px;
  font-size: 13px;
  a {
    color: #000;
    text-decoration: none;
  }
`;
const SellerImg = styled.img`
  width: 50px;

  border-radius: 50%;
  margin-right: 15px;
`;

const ItemsDetails = () => {
  const { itemID } = useParams();
  return (
    <ItemPage>
      {Object.values(items)
        .filter((item) => {
          if (item.id === itemID) {
            return true;
          }
        })
        .map((item) => {
          {
            return (
              <ItemCard>
                <FruitImage src={item.imageSrc} alt="" />
                <DescriptionContainer>
                  <FruitName>{item.name}</FruitName>
                  <LatinName>{item.latinName}</LatinName>
                  <FruitDescription>{item.description}</FruitDescription>
                  <FruitOrigin>
                    Product of <strong>{item.countryOfOrigin}</strong>
                  </FruitOrigin>
                  <BuyNowButton>${item.price} - Buy now</BuyNowButton>
                  {Object.values(sellers)
                    .filter((seller) => {
                      if (seller.id === item.sellerId) {
                        return true;
                      }
                    })
                    .map((seller) => {
                      return (
                        <SellerInfo>
                          <SellerImg src={seller.avatarSrc} alt="" />
                          <p>
                            Sold by:{" "}
                            <strong>
                              <Link to={`/sellers/${seller.id}`}>
                                {seller.storeName}
                              </Link>
                            </strong>
                          </p>
                        </SellerInfo>
                      );
                    })}
                </DescriptionContainer>
              </ItemCard>
            );
          }
        })}
    </ItemPage>
  );
};

export default ItemsDetails;

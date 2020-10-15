import React from "react";
import styled from "styled-components";
import { sellers } from "../data";
import { Link } from "react-router-dom";

const Viewport = styled.div`
  max-width: 1300px;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: Raleway, sans-serif;
`;

const SellersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 50px;
`;

const SellerCard = styled.div`
  a {
    color: #000;
    text-decoration: none;
    font-size: 21px;
    font-weight: 700;
  }
  padding: 30px;
  margin: 0 20px;
  border-radius: 10px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1), 0 -1px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
const SellerImg = styled.img`
  width: 300px;
  border-radius: 50%;
`;

const Sellers = () => {
  return (
    <Viewport>
      <h1>Sellers</h1>
      <SellersContainer>
        {Object.values(sellers).map((seller) => {
          return (
            <SellerCard>
              <Link to={`/sellers/${seller.id}`}>
                <SellerImg src={seller.avatarSrc} alt="" />
                <p>{seller.storeName}</p>
              </Link>
            </SellerCard>
          );
        })}
      </SellersContainer>
    </Viewport>
  );
};

export default Sellers;

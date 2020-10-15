import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { sellers, items } from "../data";
import ListingGrid from "./ListingGrid";

const Viewport = styled.div`
  max-width: 1300px;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Description = styled.div`
  padding: 75px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    width: 425px;
    border-radius: 50%;
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  margin: 0 auto;
`;

const SellerDetails = () => {
  const { sellerID } = useParams();
  return (
    <>
      {Object.values(sellers)
        .filter((seller) => {
          if (seller.id === sellerID) {
            return true;
          }
        })
        .map((seller) => {
          return (
            <Viewport>
              <Description>
                <div>
                  <img src={seller.avatarSrc} alt="" />
                </div>
                <div>
                  <h2>{seller.storeName}</h2>
                  <p>{seller.description}</p>
                </div>
              </Description>
              <h1>Seller's products</h1>
              <Products>
                {Object.values(items)
                  .filter((item) => {
                    if (item.sellerId === sellerID) {
                      return true;
                    }
                  })
                  .map((item) => {
                    return <ListingGrid itemList={item} />;
                  })}
              </Products>
            </Viewport>
          );
        })}
    </>
  );
};

export default SellerDetails;

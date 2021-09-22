import React, { useContext } from "react";
import styled from "styled-components";
import { Image, PageHeader } from "../shared/components";
import { FavouritesContext } from "../shared/FavouritesContext";

export const FavouritesPage = () => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <>
      <PageHeader
        header="Favourites"
        subHeader="View your favourite photos here."
      />
      <ImagesWrapper>
        {favourites.length === 0 ? (
          <NoFavourites />
        ) : (
          favourites.map((data, i) => (
            <Image isGray={i % 2 === 1} data={data} />
          ))
        )}
      </ImagesWrapper>
    </>
  );
};

const NoFavourites = () => (
  <NoFavouritesWrapper>
    <NoFavouritesText>No favourites found</NoFavouritesText>
  </NoFavouritesWrapper>
);

const HeaderWrapper = styled.div`
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f4f4;
`;

const HeaderText = styled.p`
  margin: 0;
  font-family: Lato;
  font-size: 24px;
  line-height: 29px;
  color: #313131;
  margin-bottom: 1rem;
`;

const SubHeaderText = styled.p`
  margin: 0;
  font-family: Lato;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #6a6a6a;
`;

const ImagesWrapper = styled.div``;

const NoFavouritesWrapper = styled.div`
  display: flex;
  padding: 6rem;
  justify-content: center;
  align-items: center;
`;

const NoFavouritesText = styled.p`
  margin: 0;
  font-family: Lato;
  font-style: italic;
  font-size: 36px;
  line-height: 43px;
  color: #8e8e8e;
`;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { RiShareCircleLine } from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FavouritesContext } from "../FavouritesContext";
import { ImageShareDialog } from "./ImageShareDialog";

export const Image = ({ isGray, data }) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ImageShareDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        link={data.img_src}
      />
      <Container isGray={isGray}>
        <img
          alt={data.img_src}
          src={data.img_src}
          style={{ width: "40%", height: "auto" }}
        />
        <InfoWrapper>
          <InfoText>{`Taken On: ${data.earth_date}`}</InfoText>
          <InfoText>{`Taken By: ${data.rover.name}`}</InfoText>
          <div>
            <Button
              IconComponent={
                favourites.some((fav) => fav.id === data.id)
                  ? AiFillHeart
                  : AiOutlineHeart
              }
              onClick={() =>
                favourites.some((fav) => fav.id === data.id)
                  ? removeFavourite(data)
                  : addFavourite(data)
              }
            />
            <Button
              IconComponent={RiShareCircleLine}
              onClick={() => setModalOpen(true)}
            />
          </div>
        </InfoWrapper>
      </Container>
    </>
  );
};

const Button = ({ IconComponent, onClick = () => {} }) => (
  <IconButton onClick={onClick}>
    <IconComponent size="1.5rem" color="#919090" />
  </IconButton>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: ${({ isGray }) => (isGray ? "#f7f4f4" : "white")};
`;

const InfoWrapper = styled.div`
  padding: 0 1.5rem;
`;

const InfoText = styled.p`
  margin: 0.5rem 0;
  font-family: Lato;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #6a6a6a;
`;

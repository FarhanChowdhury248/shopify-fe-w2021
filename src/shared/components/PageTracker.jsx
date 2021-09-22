import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const PageTracker = ({
  page,
  showLeft,
  showRight,
  onClickLeft,
  onClickRight,
}) => {
  return (
    <Container>
      {showLeft && (
        <IconButton onClick={onClickLeft}>
          <BiChevronLeft size="1.5rem" color="#646464" />
        </IconButton>
      )}
      <Text>{`Page ${page}`}</Text>
      {showRight && (
        <IconButton onClick={onClickRight}>
          <BiChevronRight size="1.5rem" color="#646464" />
        </IconButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  margin: 0;
  font-family: Lato;
  font-weight: 300;
  font-size: 14px;
  color: #333333;
  padding: 0 0.5rem;
`;

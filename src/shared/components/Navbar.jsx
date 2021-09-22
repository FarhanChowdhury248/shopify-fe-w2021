import React from "react";
import styled from "styled-components";
import { Button as MuiButton } from "@material-ui/core";
import { PATHS } from "../constants";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  return (
    <Container>
      <TitleWrapper>
        <Title>SPACESTAGRAM</Title>
      </TitleWrapper>
      <div style={{ display: "flex" }}>
        <Button onClick={() => history.push(PATHS.HOME_PAGE)}>Home</Button>
        <Button onClick={() => history.push(PATHS.FAVOURITES_PAGE)}>
          Favourites
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  border-bottom: 2px solid #383838;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  margin: 0;
`;

const Button = styled(MuiButton)`
  margin: 0 0.5rem;
`;

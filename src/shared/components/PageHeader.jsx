import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const PageHeader = ({ header = "", subHeader = "" }) => (
  <HeaderWrapper>
    <HeaderText>{header}</HeaderText>
    <SubHeaderText>{subHeader}</SubHeaderText>
  </HeaderWrapper>
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

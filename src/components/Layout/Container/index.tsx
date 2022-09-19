import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 60%;
  max-width: 720px;
  margin: 0 auto;

  @media (max-width: 720px) {
    width: 90% !important;
  }
`;

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

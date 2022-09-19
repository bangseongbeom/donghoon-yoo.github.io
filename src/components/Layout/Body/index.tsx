import React, { ReactNode } from "react";
import styled from "styled-components";
import { Container } from "../..";

const BodyLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

type Props = {
  children: ReactNode;
};

const Body = ({ children }: Props) => {
  return (
    <Container>
      <BodyLayout>{children}</BodyLayout>
    </Container>
  );
};

export default Body;

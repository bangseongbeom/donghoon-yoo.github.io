import React from "react";
import styled from "styled-components";
import BlogConfig from "../../../../config";
import { Divider, VerticalFlexbox, Container } from "../..";

const StyledFooter = styled.footer`
  background-color: ${(props) =>
    props.theme.colors.component.footer.backgroundAlternative};
  background: ${(props) => props.theme.colors.component.footer.background};
  color: ${(props) => props.theme.colors.component.footer.color};
`;

const StyledDivider = styled.div`
  background-color: ${(props) => props.theme.colors.component.footer.color};
  opacity: 0.2;
`;

const Name = styled.div`
  font-size: ${(props) => props.theme.font.size.h2};
  font-weight: 700;
  letter-spacing: -0.4px;
`;

const Copyright = styled.div`
  opacity: 0.5;
  font-size: ${(props) => props.theme.font.size.extraSmall};
  font-weight: 500;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <VerticalFlexbox gap="16px" margin="16px">
          <VerticalFlexbox gap="16px" margin="48px">
            <Name>{BlogConfig.title}</Name>
          </VerticalFlexbox>
          <StyledDivider>
            <Divider backgroundColor="inherit" />
          </StyledDivider>
          <Copyright>
            (C) {BlogConfig.components.footer.since}-{new Date().getFullYear()}{" "}
            {BlogConfig.author}.
          </Copyright>
        </VerticalFlexbox>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

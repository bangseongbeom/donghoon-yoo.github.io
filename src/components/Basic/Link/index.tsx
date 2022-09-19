import React, { ReactNode } from "react";
import styled from "styled-components";

export type LinkProp = {
  link: string;
  external?: boolean;
  noreferrer?: boolean;
  children: ReactNode;
};

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Link = ({ link, external, noreferrer, children }: LinkProp) => (
  <StyledLink
    href={link}
    target={external ? "_blank" : "_self"}
    {...(noreferrer ? { rel: "noreferrer" } : {})}
  >
    {children}
  </StyledLink>
);

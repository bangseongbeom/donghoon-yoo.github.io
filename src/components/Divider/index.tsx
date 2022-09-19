import React from "react";
import styled from "styled-components";
import { VisibilityController } from "..";

type DividerProps = {
  height?: string;
  backgroundColor?: string;
};

export const Divider = styled.div<DividerProps>`
  align-self: stretch;
  height: ${(props) => props.height || "1px"};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.divider};
`;

type VerticalDividerProps = {
  width?: string;
};

export const VerticalDivider = styled.div<VerticalDividerProps>`
  width: ${(props) => props.width || "1px"};
  height: 100%;
  align-self: stretch;

  background-color: ${(props) => props.theme.colors.divider};
`;

export const ResponsibleDivider = () => {
  return (
    <>
      <VisibilityController property="max-width" value="720px" reverse={true}>
        <Divider />
      </VisibilityController>
      <VisibilityController property="max-width" value="720px">
        <VerticalDivider />
      </VisibilityController>
    </>
  );
};

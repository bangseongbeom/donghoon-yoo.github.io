import styled from "styled-components";

type VisibilityControllerProps = {
  property: "min-width" | "max-width";
  value: string;
  reverse?: boolean;
};

export const VisibilityController = styled.div<VisibilityControllerProps>`
  align-self: stretch;

  display: ${(props) => (props.reverse ? "none" : "block")};
  @media (${(props) => `${props.property}: ${props.value}`}) {
    display: ${(props) => (props.reverse ? "block" : "none")};
  }
`;

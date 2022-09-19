import styled from "styled-components";

type VerticalFlexboxProps = {
  gap: string;
  margin?: string;
};

export const VerticalFlexbox = styled.div<VerticalFlexboxProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  ${(props) => props.margin && `margin: ${props.margin} 0px;`}
`;

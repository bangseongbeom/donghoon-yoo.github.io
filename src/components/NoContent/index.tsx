import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 150px;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.tertiary};
`;

type Props = {
  name: string;
};

export const NoContent = ({ name }: Props) => (
  <Wrapper>{name}에 관하여 표시할 내용이 없습니다.</Wrapper>
);

import React from "react";
import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;

  padding: 0px 16px;
  box-sizing: border-box;

  border: 1px solid ${(props) => props.theme.colors.primary};

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 16px;
`;

const Icon = styled.span`
  font-size: ${(props) => props.theme.font.size.normal};
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s;
  svg {
    stroke-width: 1px;
  }
`;

const Input = styled.input.attrs({ type: "text" })`
  border: unset;
  background-color: transparent;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
  box-sizing: border-box;
  outline: none;
`;

export const TextField = ({ ...props }) => {
  return (
    <Wrapper>
      <Icon>
        <FiSearch />
      </Icon>
      <Input {...props} />
    </Wrapper>
  );
};

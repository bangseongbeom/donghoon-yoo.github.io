import React from "react";
import { useTheme } from "styled-components";
import { Utterances } from "utterances-react-component";
import BlogConfig from "../../../../config";
import { Theme } from "../../../assets/theme";
import { Divider } from "../..";

export const Footer = () => {
  const theme = useTheme() as Theme;

  return (
    <>
      <Divider />
      <Utterances {...BlogConfig.utterances} theme={theme.utterances} />
    </>
  );
};

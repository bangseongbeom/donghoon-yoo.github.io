import React, { ReactNode, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setLight, setDark } from "../../reducers/theme";
import { light, dark } from "../../assets/theme";
import { GlobalStyles } from "../GlobalStyles";
import { GlobalNavigation } from "./Navigation";
import Body from "./Body";
import Footer from "./Footer";

export { Container } from "./Container";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;
`;

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const dispatch = useDispatch();
  // @ts-ignore @TODO: typescript 구조에 맞게 리팩토링
  const { theme } = useSelector((state) => state.theme);

  let isSystemDarkMode: boolean | null = null;
  if (typeof window !== "undefined") {
    isSystemDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
  }

  let localTheme: string | null = null;
  if (typeof localStorage !== "undefined") {
    localTheme = localStorage.getItem("theme");
  }

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    dispatch(nextTheme === "dark" ? setDark : setLight);
    localStorage.setItem("theme", nextTheme);
  };

  useEffect(() => {
    if (isSystemDarkMode && !localTheme)
      dispatch(isSystemDarkMode ? setDark : setLight);
    else if (localTheme) dispatch(localTheme === "dark" ? setDark : setLight);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Main>
        <GlobalStyles />
        <GlobalNavigation toggleTheme={toggleTheme} />
        <div style={{ flex: "1" }}>
          <Body>{children}</Body>
        </div>
        <Footer />
      </Main>
    </ThemeProvider>
  );
};

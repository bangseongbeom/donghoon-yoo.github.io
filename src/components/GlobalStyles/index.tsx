import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "katex/dist/katex.min.css";
import "../../../prism.css";
import "../../fonts/typography.css";
import type { Theme } from "../../assets/theme";

type Props = {
  theme: Theme;
};

export const GlobalStyles = createGlobalStyle<Props>`
  ${reset}

  * {
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }  

  body {
    :lang(ko) {
      h1, h2, h3, h4, h5, h6 {
        word-break: keep-all;
      }
    }

    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;

    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.background};
  }
`;

import styled from "styled-components";

export const StyledMarkdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & {
    font-weight: 400;
    font-size: ${(props) => props.theme.font.size.normal};
    color: ${(props) => props.theme.colors.primary};
    line-height: 2;
    overflow: hidden;
  }

  & del {
    opacity: 40%;
  }

  & table {
    text-align: center;
    word-break: keep-all;
  }

  /*& > p,
  & > ul,
  & > ol,
  & table,
  & blockquote,
  & pre,
  & img,
  & .katex-display {
    
  }*/

  & p {
    overflow-x: scroll;
    word-break: break-all;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-weight: 700;
  }

  & h2 {
    margin-top: 48px;
    font-size: ${(props) => props.theme.font.size.h2};
  }

  & h3 {
    margin-top: 36px;
    font-size: ${(props) => props.theme.font.size.h3};
  }

  & h4 {
    margin-top: 24px;
    font-size: ${(props) => props.theme.font.size.h4};
  }

  & h5 {
    font-size: ${(props) => props.theme.font.size.h5};
  }

  & h6 {
    font-size: ${(props) => props.theme.font.size.h6};
  }

  & strong {
    font-weight: 700;
  }

  & em {
    font-style: italic;
  }

  & u {
    position: relative;

    -webkit-text-decoration-color: transparent;
    text-decoration-color: transparent;

    &:after {
      content: " ";
      position: absolute;
      left: 0px;
      bottom: -1px;
      width: 100%;
      height: 4px;
      opacity: 0.6;
      background-color: #33b5e5;
    }
  }

  & blockquote {
    padding: 12px 24px;
    border-left: 4px solid ${(props) => props.theme.colors.divider};
    background-color: ${(props) => props.theme.colors.background};
  }

  & table {
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-collapse: collapse;
  }

  & th {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    font-weight: 700;
  }

  & td {
    border-top: 1px solid ${(props) => props.theme.colors.primary};
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }

  & td,
  th {
    padding: 8px;
  }

  & tr:first-child td {
    border-top: none;
  }

  & tr:nth-child(even) {
    background-color: ${(props) => props.theme.colors.background};
  }

  & tr:last-child td {
    border-bottom: none;
  }

  & p > code {
    word-break: break-all;
  }

  & code.language-text {
    padding: 1.6px 4.8px;
    font-size: 14.4px;
    background-image: none;
    background-color: ${(props) => props.theme.colors.quaternary};
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    border: none;
    border-radius: 1.5px;
    box-shadow: none;
  }

  & a > code.language-text:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.quaternary};
    border-radius: 1.5px;
  }

  & ul,
  & ol {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding-left: 32px;
  }

  & ol {
    list-style: decimal;
  }

  & ul {
    list-style: disc;
  }

  & ul ul {
    list-style: circle;
  }

  & ul ul ul {
    list-style: square;
  }

  & li {
    padding: 0;
    margin: 0;

    line-height: 1.2;
  }

  & pre {
    ::-webkit-scrollbar {
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.scrollTrack};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.scrollHandle};
    }
  }

  & pre > code {
    font-size: ${(props) => props.theme.font.size.small};
  }

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  & figcaption {
    margin-top: 5px;
    text-align: center;
    color: #868e96;
    font-size: 12px;
    font-style: italic;
  }

  & hr {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.divider};
  }

  & a {
    padding: 0;
    color: ${(props) => props.theme.colors.primary};
  }

  & a:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    border-radius: ${(props) => props.theme.style.borderRadius};
  }
`;

import React, { useEffect, useState } from "react";
import { map, pipe, toArray } from "@fxts/core";
import styled, { css } from "styled-components";
import { animateScroll } from "react-scroll";
import { useScroll } from "../../../../hooks";
import { getElementOffset } from "../../../../utils";
import { RevealOnScroll } from "../../../RevealOnScroll";

const TocWrapper = styled.div`
  position: absolute;
  opacity: 1;
  left: 100%;

  & > div {
    padding-right: 20px;
    padding-left: 16px;
    margin-left: 60px;
    position: relative;
    width: (100% - 720px) / 2;
    max-height: calc(100% - 185px);
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.scrollTrack};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.scrollHandle};
    }

    position: fixed;
    top: 114px;
  }

  @media (max-width: 1280px) {
    display: None;
  }
`;

type ParagraphTitleProps = {
  subtitle: boolean;
  active: boolean;
};

const ParagraphTitle = styled.div<ParagraphTitleProps>`
  margin-bottom: 8px;
  padding-left: ${(props) => (props.subtitle ? 19.2 : 0)}px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.tertiary};
  line-height: 1.3;
  transition: all 0.2s;

  ${(props) =>
    props.active &&
    css`
      transform: translate(-11.2px, 0);
      color: ${(props) => props.theme.colors.secondary};
    `}

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

type Item = {
  tagName: string;
  innerText: string;
};

type Props = {
  items: Array<Item>;
};

export const Toc = ({ items }: Props) => {
  const { y } = useScroll();

  const [revealAt, setRevealAt] = useState(4000);
  const [headers, setHeaders] = useState<Array<number>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setHeaders(
      pipe(
        document.querySelectorAll(
          "#article-body > h2, #article-body > h3",
        ) as unknown as Array<HTMLElement>, // @TODO: 해결책 찾기
        map((element) => getElementOffset(element).top),
        toArray,
      ),
    );
  }, []);

  useEffect(() => {
    headers.forEach((header, i) => {
      if (header - 300 < y) {
        setActive(i);
        return;
      }
    });
  }, [y]);

  const handleClickTitle = (index: number) => {
    animateScroll.scrollTo(headers[index]);
  };

  return (
    <RevealOnScroll revealAt={revealAt} reverse>
      <TocWrapper>
        <div>
          {items.map((item, i) => (
            <ParagraphTitle
              key={i}
              subtitle={item.tagName === "H3"}
              active={i === active}
              onClick={() => handleClickTitle(i)}
            >
              {item.innerText}
            </ParagraphTitle>
          ))}
        </div>
      </TocWrapper>
    </RevealOnScroll>
  );
};

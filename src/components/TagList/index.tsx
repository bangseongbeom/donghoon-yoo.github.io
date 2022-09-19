import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { spaceToDash } from "../../utils";

const TagListWrapper = styled.div`
  display: flex;
  flex-direction: row column;
  flex-wrap: wrap;
  gap: 8px;

  a {
    text-decoration: none;
  }
`;

type TagLinkProps = {
  selected?: boolean;
};

const TagLink = styled.div<TagLinkProps>`
  border-radius: 2000px;
  box-sizing: border-box;

  padding: 4px 8px;

  border: 1px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.background
        : props.theme.colors.accent.primary};
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.accent.primary
      : props.theme.colors.background};
  color: ${(props) =>
    props.selected
      ? props.theme.colors.background
      : props.theme.colors.accent.primary};

  text-decoration: none;
  font-size: ${(props) => props.theme.font.size.extraSmall};
`;
type Tag =
  | {
      fieldValue: string;
      totalCount: number;
    }
  | string;

type Props = {
  tagList: Array<Tag>;
  count?: boolean;
  selected?: string;
};

export const TagList = ({ tagList, count, selected }: Props) => {
  if (!tagList) return null;

  if (!count) {
    return (
      <TagListWrapper>
        {tagList.map((tag, i) => {
          const tagName = typeof tag === "object" ? tag.fieldValue : tag;
          return (
            <Link
              key={JSON.stringify({ tag, i })}
              to={`/tags?q=${spaceToDash(tagName)}`}
            >
              <TagLink># {tagName}</TagLink>
            </Link>
          );
        })}
      </TagListWrapper>
    );
  }

  return (
    <TagListWrapper>
      {tagList.map((tag, i) => {
        const tagName = typeof tag === "object" ? tag.fieldValue : tag;
        const tagAmount = typeof tag === "object" ? tag.totalCount : tag;
        return (
          <Link
            key={JSON.stringify({ tag, i })}
            to={
              selected === tagName ? "/tags" : `/tags?q=${spaceToDash(tagName)}`
            }
          >
            <TagLink selected={tagName === selected}># {tagName}</TagLink>
          </Link>
        );
      })}
    </TagListWrapper>
  );
};

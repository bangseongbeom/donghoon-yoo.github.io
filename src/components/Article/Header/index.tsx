import React from "react";
import styled from "styled-components";
import { Divider, VerticalFlexbox } from "../..";
import BlogConfig from "../../../../config";
import { TagList } from "../..";

const ArticleTitle = styled.h3`
  line-height: 1.2;
  font-size: ${(props) => props.theme.font.size.h3};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

const Information = styled.div`
  font-size: ${(props) => props.theme.font.size.small};
`;

type Tag = {
  fieldValue: string;
  totalCount: number;
};

type Props = {
  title: string;
  date: string;
  tags: Array<Tag>;
  minToRead: number;
};

export const Header = ({ title, date, tags, minToRead }: Props) => {
  return (
    <>
      <VerticalFlexbox gap="24px">
        <VerticalFlexbox gap="16px">
          <ArticleTitle>{title}</ArticleTitle>
          <Information>
            <span>{BlogConfig.author}</span>
            <span> · </span>
            <span>{date}</span>
            <span> · </span>
            <span>{minToRead}분</span>
          </Information>
        </VerticalFlexbox>
        {tags && <TagList tagList={tags} />}
      </VerticalFlexbox>
      <Divider />
    </>
  );
};

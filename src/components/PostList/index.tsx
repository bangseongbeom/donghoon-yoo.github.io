import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";
import { Divider } from "../Divider";
import { TagList } from "../TagList";
import { StyledH5, Link, VerticalFlexbox } from "..";

const Date = styled.p`
  font-size: ${(props) => props.theme.font.size.extraSmall};
  color: ${(props) => props.theme.colors.tertiary};
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.font.size.normal};
  color: ${(props) => props.theme.colors.secondary};
  word-break: break-all;
`;

const checkIsScrollAtBottom = () => {
  return (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 100
  );
};

type Tag = {
  fieldValue: string;
  totalCount: number;
};

type Post = {
  frontmatter: {
    title: string;
    date: string;
    tags: Array<Tag>;
    description: string | null;
  };
  fields: {
    slug: string;
  };
};

type Props = {
  postList: Array<Post>;
};

export const PostList = ({ postList }: Props) => {
  const [postCount, setPostCount] = useState(10);

  const handleMoreLoad = _.throttle(() => {
    if (checkIsScrollAtBottom() && postCount < postList.length) {
      setTimeout(() => setPostCount(postCount + 10), 300);
    }
  }, 250);

  useEffect(() => {
    window.addEventListener("scroll", handleMoreLoad);

    return () => {
      window.removeEventListener("scroll", handleMoreLoad);
    };
  }, [postCount, postList]);

  useEffect(() => {
    setPostCount(10);
  }, [postList]);

  return (
    <VerticalFlexbox gap="48px">
      {postList.slice(0, postCount).map((post, i) => {
        const { title, date, tags, description } = post.frontmatter;
        const { slug } = post.fields;

        return (
          <>
            <VerticalFlexbox gap="24px">
              <VerticalFlexbox gap="16px">
                <StyledH5>
                  <Link link={slug}>{title}</Link>
                </StyledH5>
                <Date>{date}</Date>
              </VerticalFlexbox>
              <Description>{description}</Description>
              <TagList tagList={tags} />
            </VerticalFlexbox>

            {postCount - 1 != i && postList.length - 1 != i && <Divider />}
          </>
        );
      })}
    </VerticalFlexbox>
  );
};

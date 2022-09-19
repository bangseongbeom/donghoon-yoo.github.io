import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Divider, Layout, PostList, SEO, VerticalFlexbox } from "../components";
import BlogConfig from "../../config";
import { StyledH3, StyledH6 } from "../components/Typography";

const SeriesInform = styled.div`
  display: flex;
  flex-direction: column row;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;

  font-size: ${(props) => props.theme.font.size.small};

  color: ${(props) => props.theme.colors.tertiary};
`;

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
    series: string;
  };
  fields: {
    slug: string;
  };
};

type Props = {
  data: {
    posts: {
      nodes: Array<Post>;
    };
  };
};

const Series = ({ data }: Props) => {
  const posts = data.posts.nodes;
  const seriesName = data.posts.nodes[0].frontmatter.series;

  return (
    <Layout>
      <SEO
        title={`시리즈: ${seriesName}`}
        description={BlogConfig.description}
        url={BlogConfig.siteUrl}
      />

      <VerticalFlexbox gap="16px">
        <VerticalFlexbox gap="16px">
          <StyledH6>시리즈: </StyledH6>
          <StyledH3>{seriesName}</StyledH3>
        </VerticalFlexbox>

        <SeriesInform>
          <span>{posts.length}개</span>
          <span>·</span>
          <span>마지막 수정 {posts[posts.length - 1].frontmatter.date}</span>
        </SeriesInform>
      </VerticalFlexbox>

      <Divider />

      <PostList postList={posts} />
    </Layout>
  );
};

export default Series;

export const pageQuery = graphql`
  query BlogSeriesBySeriesName($series: String) {
    posts: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { frontmatter: { series: { eq: $series } } }
    ) {
      nodes {
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          update(formatString: "YYYY.MM.DD")
          title
          tags
          series
        }
      }
    }
  }
`;

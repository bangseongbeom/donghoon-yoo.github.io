import React, { useCallback, useState } from "react";
import _ from "lodash";
import styled from "styled-components";
import { graphql } from "gatsby";
import BlogConfig from "../../config";
import { Layout, PostList, SEO, SideTagList, TextField } from "../components";

type Tag = {
  fieldValue: string;
  totalCount: number;
};

type Frontmatter = {
  date: string;
  update: string;
  title: string;
  tags: Array<Tag>;
  description: string | null;
};

type MarkDownRemarkGroupConnection = {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: Frontmatter;
  rawMarkdownBody: string;
};

type PageQueryResult = {
  allMarkdownRemark: {
    group: Array<
      | {
          fieldValue: string;
          totalCount: number;
        }
      | string
    >;
    nodes: Array<MarkDownRemarkGroupConnection>;
  };
};

type Props = {
  data: PageQueryResult;
};

const SearchWrapper = styled.div``;

const BlogIndex = ({ data }: Props) => {
  const posts = data.allMarkdownRemark.nodes;
  const tags = _.sortBy(data.allMarkdownRemark.group, ["totalCount"]).reverse();

  const [query, setQuery] = useState<string>("");

  const filteredPosts = useCallback(
    // @ts-ignore: @TODO: 원리 파악 후 수정
    posts.filter((post) => {
      const { frontmatter, rawMarkdownBody } = post;
      const { title } = frontmatter;
      const lowerQuery = query.toLocaleLowerCase();

      if (rawMarkdownBody.toLocaleLowerCase().includes(lowerQuery)) return true;

      return title.toLocaleLowerCase().includes(lowerQuery);
    }),
    [query],
  );

  if (posts.length === 0) {
    return <p>게시글 없음</p>;
  }

  return (
    <Layout>
      <SEO
        title={BlogConfig.title}
        description={BlogConfig.description}
        url={BlogConfig.siteUrl}
      />
      <SearchWrapper>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setQuery(e.target.value)
          }
        />
      </SearchWrapper>
      <SideTagList tags={tags} />
      {/*@TODO: as any 제거*/}
      <PostList postList={filteredPosts as unknown as any} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          update(formatString: "YYYY.MM.DD")
          title
          tags
          description
        }
        rawMarkdownBody
      }
    }
  }
`;

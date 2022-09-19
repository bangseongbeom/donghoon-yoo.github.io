import React from "react";
import {
  pipe,
  map,
  groupBy,
  entries,
  sortBy,
  filter,
  reverse,
  toArray,
} from "@fxts/core";
import { graphql } from "gatsby";
import BlogConfig from "../../config";
import { SEO, Layout, SeriesList, NoContent } from "../components";
import { StyledH1 } from "../components/Typography";

type Frontmatter = {
  date: string;
  update: string;
  title: string;
  tags: Array<string>;
  series: string;
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
    nodes: Array<MarkDownRemarkGroupConnection>;
  };
};

type Props = {
  data: PageQueryResult;
};

const SeriesPage = ({ data }: Props) => {
  const posts = data.allMarkdownRemark.nodes;
  const series = pipe(
    posts,
    map((post) => ({ ...post.frontmatter, slug: post.fields.slug })),
    groupBy((post) => post.series),
    entries,
    map(([, series]) => ({
      name: series[0].series,
      posts: series,
      lastUpdated: series[0].date,
    })),
    sortBy((series) => new Date(series.lastUpdated)),
    filter((series) => series.name),
    reverse,
    toArray,
  );

  return (
    <Layout>
      <SEO
        title={BlogConfig.title}
        description={BlogConfig.description}
        url={BlogConfig.siteUrl}
      />

      <StyledH1>시리즈</StyledH1>

      {series.length === 0 && <NoContent name="series" />}

      <SeriesList seriesList={series} />
    </Layout>
  );
};

export default SeriesPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          update(formatString: "YYYY.MM.DD")
          title
          tags
          series
          description
        }
      }
    }
  }
`;

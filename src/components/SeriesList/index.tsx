import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { StyledH5, Link, Divider, VerticalFlexbox } from "..";

const SeriesInform = styled.div`
  display: flex;
  flex-direction: column row;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  color: ${(props) => props.theme.colors.muted};

  font-size: ${(props) => props.theme.font.size.extraSmall};
`;

const checkIsScrollAtBottom = () => {
  return (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 100
  );
};

type Post = unknown;

type Series = {
  name: string;
  posts: Array<Post>;
  lastUpdated: string;
};

type Props = {
  seriesList: Array<Series>;
};

export const SeriesList = ({ seriesList }: Props) => {
  const [seriesCount, setSeriesCount] = useState(10);

  const handleMoreLoad = _.throttle(() => {
    if (checkIsScrollAtBottom() && seriesCount < seriesList.length) {
      setTimeout(() => setSeriesCount(seriesCount + 10), 300);
    }
  }, 250);

  useEffect(() => {
    window.addEventListener("scroll", handleMoreLoad);

    return () => {
      window.removeEventListener("scroll", handleMoreLoad);
    };
  }, [seriesCount, seriesList]);

  useEffect(() => {
    setSeriesCount(10);
  }, [seriesList]);

  return (
    <VerticalFlexbox gap="48px">
      {seriesList.slice(0, seriesCount).map((series, i) => {
        return (
          <>
            <VerticalFlexbox gap="16px">
              <StyledH5>
                <Link link={`/series/${_.replace(series.name, /\s/g, "-")}`}>
                  {series.name}
                </Link>
              </StyledH5>
              <SeriesInform>
                <span>{series.posts.length}개</span>
                <span>·</span>
                <span>최근 수정 {series.lastUpdated}</span>
              </SeriesInform>
            </VerticalFlexbox>
            {seriesCount - 1 != i && seriesCount - 1 != i && <Divider />}
          </>
        );
      })}
    </VerticalFlexbox>
  );
};

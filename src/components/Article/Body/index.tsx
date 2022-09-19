import React, { useEffect, useState } from "react";
import { useOffsetTop } from "../../../hooks";
import { Toc } from "./Toc";
import { StyledMarkdown } from "./StyledMarkdown";
import { VerticalFlexbox } from "../..";

type Props = {
  html: string;
};

export const Body = ({ html }: Props) => {
  const [toc, setToc] = useState([]);

  const [offsetTop, ref] = useOffsetTop();

  useEffect(() => {
    setToc(
      Array.from(
        document.querySelectorAll("#article-body > h2, #article-body > h3"),
      ),
    );
  }, []);

  return (
    <VerticalFlexbox gap="16px">
      <Toc items={toc} />

      <StyledMarkdown
        id="article-body"
        dangerouslySetInnerHTML={{ __html: html }}
        itemProp="articleBody"
        ref={ref}
      />
    </VerticalFlexbox>
  );
};

export default Body;

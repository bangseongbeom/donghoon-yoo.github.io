import { UtterancesProps } from "utterances-react-component";

type BlogConfig = {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  components: {
    globalNavigation: {
      brand: string;
    };
    footer: {
      since: string;
    };
  };
  links: {
    github: string;
    email: string;
  };
  utterances: UtterancesProps;
};

const blogConfig: BlogConfig = {
  title: "Lumière",
  description: "cloud native",
  author: "DongHoon Yoo",
  siteUrl: "https://blog.donghoonyoo.com",
  components: {
    globalNavigation: {
      brand: "donghoonyoo.com",
    },
    footer: {
      since: "2021",
    },
  },
  links: {
    github: "https://github.com/donghoon-yoo",
    email: "mailto:nano@kakao.com",
  },
  utterances: {
    repo: "donghoon-yoo/donghoon-yoo.github.io",
    issueTerm: "pathname",
    theme: "github-light",
  },
};

export default blogConfig;

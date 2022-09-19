import { Theme as UtterancesTheme } from "utterances-react-component";

export type Theme = {
  name: string;
  style: Style;
  colors: Color;
  font: Font;

  utterances: UtterancesTheme;
};

export type Style = {
  borderRadius: string;
};

export type Color = {
  background: string;

  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;

  accent: {
    primary: string;
    light: string;
    dark: string;
  };

  divider: string;

  scrollTrack: string;
  scrollHandle: string;

  inverse: {
    primary: string;
    secondary: string;

    divider: string;
  };

  component: {
    footer: {
      color: string;
      background: string;
      backgroundAlternative: string;
    };
  };
};

export type Font = {
  size: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    normal: string;
    small: string;
    extraSmall: string;
  };
};

const globalStyle: Style = {
  borderRadius: "4px",
};

const globalFont: Font = {
  size: {
    h1: "48px",
    h2: "42px",
    h3: "36px",
    h4: "32px",
    h5: "28px",
    h6: "24px",
    normal: "16px",
    small: "14px",
    extraSmall: "12px",
  },
};

export const light: Theme = {
  name: "light",
  style: globalStyle,
  colors: {
    background: "#ffffff",

    primary: "#000000",
    secondary: "#495057",
    tertiary: "#555559",
    quaternary: "#dadada",

    accent: {
      primary: "#2969ff",
      light: "#7596ff",
      dark: "#003fcb",
    },

    divider: "#E2E2E2",

    scrollTrack: "#171717",
    scrollHandle: "rgba(255,255,255,0.41)",

    inverse: {
      primary: "#ffffff",
      secondary: "#ced4da",

      divider: "#7E7E7E",
    },

    component: {
      footer: {
        color: "rgba(16, 24, 64, 1)",
        background: "linear-gradient(180deg, #5c6185 0%, #9aa2de 100%)",
        backgroundAlternative: "#5c6185",
      },
    },
  },
  font: globalFont,
  utterances: "github-light",
};

export const dark: Theme = {
  name: "dark",
  style: globalStyle,
  colors: {
    background: "#000000",

    primary: "#ffffff",
    secondary: "#ced4da",
    tertiary: "#bbbbbb",
    quaternary: "#424242",

    accent: {
      primary: "#2969ff",
      light: "#7596ff",
      dark: "#003fcb",
    },

    divider: "#7E7E7E",

    scrollTrack: "#495057",
    scrollHandle: "#ced4da",

    inverse: {
      primary: "#ffffff",
      secondary: "#ced4da",

      divider: "#7E7E7E",
    },

    component: {
      footer: {
        color: "rgba(209, 211, 232, 1)",
        background: "linear-gradient(180deg, #151832 0%, #373E74 100%)",
        backgroundAlternative: "#151832",
      },
    },
  },
  font: globalFont,
  utterances: "github-dark",
};

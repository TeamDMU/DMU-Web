const COLOR = {
  Black: "#000000",
  White: "#FFFFFF",
  Gray600: "#35373F",
  Gray500: "#4F525F",
  Gray400: "#7E8295",
  Gray300: "#AEB2C6",
  Gray200: "#EBEBF0",
  Gray100: "#F5F6F8",
  Blue400: "#354DAE",
  Blue300: "#4967E2",
  Blue200: "#D1D9FA",
  Blue100: "#EFF2FF",
  Red500: "#D92727",
  Red400: "#EB5E5E",
  Red300: "#FFAEAE",
  Red200: "#FFDDDD",
  Red100: "#FFF1F1",
  Yellow: "#F7CE45",
  YellowLogo: "#F7CE45",
  BlueLogo: "#5B76E4",
  LightBlueLogo: "#95A7EE",
} as const;

const FONT = {
  BOLD: (size: number, lineHeight?: number) => `
  font-weight: 700;
  font-size: ${size}px;
  line-height: ${lineHeight}%;
`,
  MEDIUM: (size: number, lineHeight?: number) => `
  font-weight: 500;
  font-size: ${size}px;
  line-height: ${lineHeight}%;
`,
  REGULAR: (size: number, lineHeight?: number) => `
  font-weight: 400;
  font-size: ${size}px;
  line-height: ${lineHeight}%;
`,
} as const;

export const theme = {
  COLOR,
  FONT,
} as const;

export default theme;

// styled-components의 DefaultTheme 정의
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    COLOR: typeof COLOR;
    FONT: typeof FONT;
  }
}

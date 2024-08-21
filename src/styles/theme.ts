import { ColorsType, FontSizeType, SpacingType } from "@/types/theme";

import "@emotion/react";
// import { ColorsType, FontSizeType, SpacingType } from "@/types/theme";

declare module "@emotion/react" {
  interface Theme {
    colors: ColorsType;
    fontSizes: FontSizeType;
    spacing: SpacingType;
  }
}

export const theme = {
  colors: {
    black: "#333333",
    white: "#FFFFFF",
    main: "#F5F5F5",
    divider: "#999999",
    gray: "#555555",
    lightGray: "#EEEEEE",
    accent: "#FF9D42",
    sub: "#FF7A00",
    alert: "#F92C2C",
    red: "#F45B5B",
    sky: "#5BB3F4",
  } as ColorsType,
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "18px",
    "2xl": "20px",
    "3xl": "24px",
  } as FontSizeType,
  spacing: {
    "0": "0",
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    "2xl": "24px",
    "3xl": "32px",
    "4xl": "64px",
    "5xl": "128px",
  } as SpacingType,
};

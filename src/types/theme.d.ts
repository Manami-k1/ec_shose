import "@emotion/react";

type ColorKeys =
  | "black"
  | "white"
  | "main"
  | "divider"
  | "gray"
  | "accent"
  | "sub"
  | "alert"
  | "red"
  | "sky";

type FontSizeKeys = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type SpacingKeys =
  | "0"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type ColorsType = Record<ColorKeys, string>;
export type FontSizeType = Record<FontSizeKeys, string>;
export type SpacingType = Record<SpacingKeys, string>;

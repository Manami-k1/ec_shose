import styled from "@emotion/styled";
import BaseBox from "../BaseBox";
import { FlexBoxProps } from ".";
import { theme } from "@/styles/theme";
import { SpacingType } from "@/types/theme";

export const StyledFlexBox = styled(BaseBox)<FlexBoxProps>`
  display: flex;
  height: ${({ h }) => h && h};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => {
    switch (props.justifyContent) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      case "between":
        return "space-between";
      case "around":
        return "space-around";
      case "evenly":
        return "space-evenly";
      default:
        return props.justifyContent || "flex-start";
    }
  }};
  align-items: ${(props) => {
    switch (props.alignItems) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      default:
        return props.alignItems || "stretch";
    }
  }};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  gap: ${(props) => {
    if (props.gap) {
      const gapKey = props.gap as keyof SpacingType;
      return theme.spacing[gapKey];
    }
    if (props.gapX && props.gapY) {
      const gapXKey = props.gapX as keyof SpacingType;
      const gapYKey = props.gapY as keyof SpacingType;
      return `${theme.spacing[gapYKey]} ${theme.spacing[gapXKey]}`;
    }
    if (props.gapX) {
      const gapXKey = props.gapX as keyof SpacingType;
      return `0 ${theme.spacing[gapXKey]}`;
    }
    if (props.gapY) {
      const gapYKey = props.gapY as keyof SpacingType;
      return `${theme.spacing[gapYKey]} 0`;
    }
    return "0";
  }};
  padding: ${(props) => props.p}; // BaseBox からの padding を適用
  width: ${(props) => props.w}; // BaseBox からの width を適用
`;

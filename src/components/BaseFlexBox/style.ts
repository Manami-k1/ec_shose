import styled from "@emotion/styled";
import BaseBox from "../BaseBox";
import { FlexBoxProps } from ".";
import { theme } from "@/styles/theme";

export const StyledFlexBox = styled(BaseBox)<FlexBoxProps>`
  display: flex;
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
  gap: ${(props) => (props.gap ? theme.spacing[props.gap] : "0")};
  padding: ${(props) => props.p}; // BaseBox からの padding を適用
  width: ${(props) => props.w}; // BaseBox からの width を適用
`;

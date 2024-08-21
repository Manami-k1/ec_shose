import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { InternalLinkProps } from ".";

export const StyledInternalLink = styled.a<InternalLinkProps>`
  display: block;
  font-size: ${(props) =>
    props.fontSize ? theme.fontSizes[props.fontSize] : theme.fontSizes.md};
  font-weight: ${(props) => (props.fontWeight === "bold" ? "bold" : "normal")};
  color: ${(props) => {
    switch (props.variant) {
      case "button":
        return theme.colors.gray;
      case "contained":
        return props.color ? theme.colors[props.color] : theme.colors.black;
      default:
        return;
    }
  }};
  text-decoration: ${(props) => {
    switch (props.variant) {
      case "button":
        return "none";
      case "contained":
        return "none";
      default:
        return;
    }
  }};
  line-height: 1.5;
  margin: ${(props) => (props.m ? theme.spacing[props.m] : 0)};
  &:hover {
    ${(props) => {
      switch (props.variant) {
        case "button":
          return "background-color: transparent;";
        case "contained":
          return `text-decoration: underline;
          text-decoration-color: ${
            props.color ? theme.colors[props.color] : theme.colors.black
          };`;
        default:
          return `color: ${theme.colors.black}; text-decoration: underline;
          text-decoration-color: ${theme.colors.black};`;
      }
    }};
  }
`;

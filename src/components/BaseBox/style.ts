import styled from "@emotion/styled";
import { BoxProps } from ".";
import { theme } from "@/styles/theme";
export const StyledBox = styled.div<BoxProps>`
  padding-top: ${(props) =>
    props.top
      ? theme.spacing[props.top]
      : props.py
      ? theme.spacing[props.py]
      : props.p
      ? theme.spacing[props.p]
      : "0"};
  padding-bottom: ${(props) =>
    props.bottom
      ? theme.spacing[props.bottom]
      : props.py
      ? theme.spacing[props.py]
      : props.p
      ? theme.spacing[props.p]
      : "0"};
  padding-left: ${(props) =>
    props.left
      ? theme.spacing[props.left]
      : props.px
      ? theme.spacing[props.px]
      : props.p
      ? theme.spacing[props.p]
      : "0"};
  padding-right: ${(props) =>
    props.right
      ? theme.spacing[props.right]
      : props.px
      ? theme.spacing[props.px]
      : props.p
      ? theme.spacing[props.p]
      : "0"};
  position: ${(props) => props.pos && props.pos};
  width: ${(props) => props.w || "auto"}; // width のデフォルト値
  background-color: ${(props) => props.bgColor && theme.colors[props.bgColor]};
  box-shadow: ${(props) => props.boxShadow && `2px 2px ${theme.colors.black}`};
  margin: ${(props) => props.m && props.m};
`;

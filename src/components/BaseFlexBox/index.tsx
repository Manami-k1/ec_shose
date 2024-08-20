import { FC } from "react";
import { StyledFlexBox } from "./style";
import { SpacingType } from "@/types/theme";
import { BoxProps } from "../BaseBox";

export interface FlexBoxProps extends BoxProps {
  direction?: "row" | "column";
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
  alignItems?: "start" | "center" | "end" | "baseline";
  wrap?: boolean;
  gap?: keyof SpacingType;
}

const BaseFlexBox: FC<FlexBoxProps> = ({ children, ...props }) => {
  return <StyledFlexBox {...props}>{children}</StyledFlexBox>;
};
export default BaseFlexBox;

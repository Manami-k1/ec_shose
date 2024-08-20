import { FC } from "react";
import { StyledBox } from "./style";
import { ColorsType, FontSizeType, SpacingType } from "@/types/theme";

export interface BoxProps extends React.ComponentPropsWithoutRef<"div"> {
  top?: keyof SpacingType;
  bottom?: keyof SpacingType;
  left?: keyof SpacingType;
  right?: keyof SpacingType;
  px?: keyof SpacingType;
  py?: keyof SpacingType;
  p?: keyof SpacingType;
  w?: string;
  bgColor?: keyof ColorsType;
  fontSize?: keyof FontSizeType;
  boxShadow?: boolean;
}
const BaseBox: FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
export default BaseBox;

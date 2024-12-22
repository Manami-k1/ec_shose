import { FC } from "react";
import { StyledTypography } from "./style";
import { ColorsType, FontSizeType, SpacingType } from "../../types/theme";

export interface TypographyProps extends React.ComponentPropsWithoutRef<"p"> {
  as?: "p" | "span";
  fontWeight?: "normal" | "bold";
  fontSize?: keyof FontSizeType;
  textAlign?: "center";
  color?: keyof ColorsType;
  variant?: "block";
  px?: keyof SpacingType;
  py?: keyof SpacingType;
}
const BaseTypography: FC<TypographyProps> = ({
  children,
  as = "p",
  ...props
}) => {
  return (
    <StyledTypography as={as} {...props}>
      {children}
    </StyledTypography>
  );
};

export default BaseTypography;

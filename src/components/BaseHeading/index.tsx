import React, { FC, ElementType } from "react";
import { StyledHeading } from "./style";
import { theme } from "@/styles/theme";
import BaseTypography from "../BaseTypography";

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: keyof typeof theme.fontSizes;
  fontWeight?: "normal" | "bold";
  variant?: "section";
  description?: string;
}

const BaseHeading: FC<HeadingProps> = ({
  as = "h1",
  fontSize,
  fontWeight,
  variant,
  children,
  description,
  ...rest
}) => {
  // const Tag: ElementType = `h${level}`;

  return (
    <StyledHeading
      as={as}
      fontSize={fontSize}
      fontWeight={fontWeight}
      variant={variant}
      description={description}
      {...rest}
    >
      {children}
      {description && (
        <BaseTypography as="span" color="sub" fontSize="xs" m="sm">
          {description}
        </BaseTypography>
      )}
    </StyledHeading>
  );
};

export default BaseHeading;

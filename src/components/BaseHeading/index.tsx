import { FontSizeType } from "@/types/theme";
import React, { FC } from "react";
import { StyledHeading } from "./style";

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6; // h1〜h6 のいずれか
  fontSize?: keyof FontSizeType;
  fontWeight?: "normal" | "bold";
}

const BaseHeading: FC<HeadingProps> = ({
  level = 1,
  fontSize,
  children,
  as,
  ...rest
}) => {
  // level プロパティに基づいてタグを動的に選択
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <StyledHeading as={Tag} fontSize={fontSize} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default BaseHeading;

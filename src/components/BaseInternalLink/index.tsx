import { FC } from "react";
import { StyledInternalLink } from "./style";
import { FontSizeType, ColorsType, SpacingType } from "@/types/theme";

export interface InternalLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  fontSize?: keyof FontSizeType;
  fontWeight?: "bold" | "normal";
  variant?: "contained" | "button";
  href: string;
  color?: keyof ColorsType;
  m?: keyof SpacingType;
}
const BaseInternalLink: FC<InternalLinkProps> = ({ children, ...props }) => {
  return <StyledInternalLink {...props}>{children}</StyledInternalLink>;
};
export default BaseInternalLink;

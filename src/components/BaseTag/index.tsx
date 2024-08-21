import { FC } from "react";
import { StyledTag, StyledTagGroup } from "./style";
import { ColorsType } from "@/types/theme";

export interface TagProps extends React.ComponentPropsWithoutRef<"span"> {
  variant?: "block" | "pill";
  bgColor?: keyof ColorsType;
}
export interface TagGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  pos?: "relative" | "absolute";
}

const BaseTag: FC<TagProps> = ({ children, color = "lightGray", ...rest }) => {
  return <StyledTag {...rest}>{children}</StyledTag>;
};

const BaseTagGroup: FC<TagGroupProps> = ({
  children,
  pos = "relative",
  ...props
}) => {
  return (
    <StyledTagGroup pos={pos} {...props}>
      {children}
    </StyledTagGroup>
  );
};

export { BaseTag, BaseTagGroup };

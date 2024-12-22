import React, { FC } from "react";
import { StyledGrid } from "./style";
import { SpacingType } from "@/types/theme";
import BaseGridItem, { GridItemProps } from "../BaseGridItem";

export interface GridProps extends React.ComponentPropsWithRef<"div"> {
  tempCol: number | string;
  gapX?: keyof SpacingType;
  gapY?: keyof SpacingType;
}
const BaseGrid: FC<GridProps> = ({
  children,
  tempCol,
  // gap,
  gapX,
  gapY,
  ...props
}) => {
  const columnSpan = typeof tempCol === "string" ? undefined : tempCol;

  return (
    <StyledGrid tempCol={tempCol} gapX={gapX} gapY={gapY} {...props}>
      {React.Children.map(children, (child) =>
        React.isValidElement<GridItemProps>(child) &&
        child.type === BaseGridItem
          ? React.cloneElement(child, { col: child.props.col ?? columnSpan })
          : child
      )}
    </StyledGrid>
  );
};
export default BaseGrid;

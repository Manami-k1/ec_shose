import { FC } from "react";
import { StyledGridItem } from "./style";

export interface GridItemProps extends React.ComponentPropsWithRef<"div"> {
  col?: number;
}
const BaseGridItem: FC<GridItemProps> = ({ children, col, ...props }) => {
  return (
    <StyledGridItem col={col} {...props}>
      {children}
    </StyledGridItem>
  );
};
export default BaseGridItem;

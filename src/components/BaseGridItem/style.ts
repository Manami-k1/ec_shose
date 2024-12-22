import styled from "@emotion/styled";
import { GridItemProps } from ".";

export const StyledGridItem = styled.div<GridItemProps>`
  grid-column: ${({ col }) => (col ? `span ${col}` : "auto")};
`;

import styled from "@emotion/styled";
import { GridProps } from ".";
import { theme } from "@/styles/theme";

export const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ tempCol }) =>
    typeof tempCol === "number"
      ? `repeat(${tempCol}, 1fr)`
      : `repeat(auto-fill, minmax(${tempCol}, 1fr))`};
  width: 100%;
  column-gap: ${({ gapX }) => (gapX ? theme.spacing[gapX] : 0)};
  row-gap: ${({ gapY }) => (gapY ? theme.spacing[gapY] : 0)};
`;

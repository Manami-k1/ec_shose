// import { theme } from "@/styles/theme";
// import styled from "@emotion/styled";
// import { TagGroupProps, TagProps } from ".";

import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import { TagProps, TagGroupProps } from ".";

export const StyledTag = styled.span<TagProps>`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  background-color: ${({ bgColor }) =>
    bgColor ? theme.colors[bgColor] : theme.colors.lightGray};
  color: ${theme.colors.white};
  border-radius: ${({ variant }) => (variant === "pill" ? "999px" : "none")};
  font-weight: ${({ variant }) => variant === "block" && "bold"};
  font-size: ${theme.fontSizes.xs};
`;

export const StyledTagGroup = styled.div<TagGroupProps>`
  position: ${({ pos }) => pos};
  background-color: #333;
  display: flex;
  flex-wrap: wrap;
  bottom: 0;
`;

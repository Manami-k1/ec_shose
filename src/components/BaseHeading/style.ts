import styled from "@emotion/styled";
import { HeadingProps } from ".";
import { theme } from "@/styles/theme";

export const StyledHeading = styled.h1<HeadingProps>`
  font-size: ${(props) =>
    props.fontSize || theme.fontSizes["3xl"]}; // デフォルトフォントサイズ
  font-weight: ${(props) =>
    props.fontWeight || "bold"}; // デフォルトフォントウェイト
  ${({ as }) =>
    as === "h2" &&
    `
    font-size: 1.5rem;
  `}
  ${({ as }) =>
    as === "h3" &&
    `
    font-size: 1.25rem;
  `}
  ${({ as }) =>
    as === "h4" &&
    `
    font-size: 1rem;
  `}
  ${({ as }) =>
    as === "h5" &&
    `
    font-size: 0.875rem;
  `}
  ${({ as }) =>
    as === "h6" &&
    `
    font-size: 0.75rem;
  `}
`;

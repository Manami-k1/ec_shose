import styled from "@emotion/styled";
import { HeadingProps } from ".";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
// `HeadingProps` を適用することで `as` プロパティを受け取れるようにする

const variants = {
  section: css`
    width: fit-content;
    margin: auto;
  `,
};

export const StyledBaseHeading = styled.h1<HeadingProps>`
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.fontSizes[fontSize] : theme.fontSizes["3xl"]};
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
`;

// export const StyledPTypography = styled.h1<{ variant?: keyof typeof variants }>`;
export const StyledHeading = styled(StyledBaseHeading)<{
  variant?: keyof typeof variants;
}>`
  ${({ variant }) => variant && variants[variant]};
`;

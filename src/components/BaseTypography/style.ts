import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { TypographyProps } from ".";

const variants = {
  block: {
    fontWeight: "bold", // `subTitle` の場合にフォントを太字に設定
    fontSize: theme.fontSizes.lg,
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    background: theme.colors.lightGray,
  },
};

const StyledBaseTypography = styled.p<TypographyProps>`
  color: ${({ color }) => color && theme.colors[color]};
  font-size: ${({ fontSize }) => fontSize && theme.fontSizes[fontSize]};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  display: block;
  text-align: ${({ as }) => as === "span" && "center"};
  padding-left: ${({ px, theme }) => (px ? theme.spacing[px] : 0)};
  padding-right: ${({ px, theme }) => (px ? theme.spacing[px] : 0)};
  padding-top: ${({ py, theme }) => (py ? theme.spacing[py] : 0)};
  padding-bottom: ${({ py, theme }) => (py ? theme.spacing[py] : 0)};
`;

export const StyledTypography = styled(StyledBaseTypography)<{
  variant?: keyof typeof variants;
}>`
  ${({ variant }) => variant && variants[variant]};
`;

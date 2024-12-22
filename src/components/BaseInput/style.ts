import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  border: 1px solid ${theme.colors.divider};

  &:focus-visible {
    outline: ${theme.colors.sub} 2px solid;
    outline-offset: -1px;
  }
`;

export const StyledFormInput = styled(StyledInput)<{ w?: "lg" }>`
  padding: 0 ${theme.spacing.sm};
  border-radius: ${theme.spacing.sm};
  background: ${theme.colors.lightPink};
  line-height: 28px;
  width: ${({ w }) => (w === "lg" ? "230px" : "80px")};
`;

export const StyledSearchInput = styled(StyledInput)`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  width: 280px;
  font-size: ${theme.fontSizes.sm};
  line-height: 1;
`;

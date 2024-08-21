import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  border: 1px solid ${theme.colors.divider};
  line-height: 1;
  &:focus-visible {
    outline: ${theme.colors.sub} 2px solid;
    outline-offset: -1px;
  }
`;

export const StyledFormInput = styled(StyledInput)`
  padding: ${theme.spacing.lg};
  border-radius: ${theme.spacing.lg};
`;

export const StyledSearchInput = styled(StyledInput)`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  width: 280px;
`;

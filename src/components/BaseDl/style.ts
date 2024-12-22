import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const StyledDl = styled.dl`
  border: ${theme.colors.divider} 1px solid;
  border-bottom: none;
  margin: 0;
  display: flex;
  &:last-child {
    border-bottom: ${theme.colors.divider} 1px solid;
  }
`;

export const StyledDt = styled.dt`
  background: ${theme.colors.lightGray};
  width: 230px;
  padding: ${theme.spacing["md"]} ${theme.spacing["xl"]};
  &:last-child {
    border-bottom: none;
  }
`;

export const StyledDd = styled.dd`
  border-bottom: ${theme.colors.divider} 1px solid;
  padding: ${theme.spacing["md"]} ${theme.spacing["xl"]};
  margin: 0;
  &:last-child {
    border-bottom: none;
  }
`;

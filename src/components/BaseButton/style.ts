import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background-color: ${theme.colors.sub};
  color: ${(props) => props.color || "#fff"};
  padding: ${theme.spacing["xl"]} ${theme.spacing["3xl"]};
  border: 1px solid ${theme.colors.sub};
  cursor: pointer;
  display: block;
  margin: 0 auto;

  &:hover {
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.sub};
    color: ${theme.colors.sub};
  }
`;

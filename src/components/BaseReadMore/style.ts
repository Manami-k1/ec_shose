import styled from "@emotion/styled";
import Slider from "react-slick";
import { StyledInternalLink } from "../BaseInternalLink/style";
import { theme } from "@/styles/theme";

export const StyledReadMore = styled(StyledInternalLink)`
  border: 1px solid ${theme.colors.gray};
  color: ${theme.colors.gray};
  width: 200px;
  padding: ${theme.spacing["xl"]} 0;
  border-radius: ${theme.spacing["lg"]};
  margin: ${theme.spacing["4xl"]} auto 0;
  text-align: center;
  font-size: ${theme.fontSizes.lg};
  text-decoration: none;
  &:hover {
    background: ${theme.colors.lightGray};
    text-decoration: none;
  }
`;

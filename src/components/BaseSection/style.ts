import styled from "@emotion/styled";
import BaseBox from "../BaseBox";
import { SectionProps } from ".";
import { theme } from "@/styles/theme";

export const StyledSection = styled(BaseBox)<SectionProps>`
  padding-bottom: ${theme.spacing["5xl"]};
`;

import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

const StyledBaseCard = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const StyledCard = styled(StyledBaseCard)``;

export const StyledCardBody = styled(StyledBaseCard)``;

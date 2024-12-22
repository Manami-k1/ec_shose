import { FC } from "react";
import { BoxProps } from "../BaseBox";
import { StyledSection } from "./style";

export interface SectionProps extends BoxProps {}

const BaseSection: FC<SectionProps> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default BaseSection;

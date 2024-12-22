import { FC } from "react";
import { StyledCard, StyledCardBody } from "./style";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

const BaseCard: FC<CardProps> = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

interface CardBodyProps extends React.ComponentPropsWithoutRef<"div"> {}

const BaseBodyCard: FC<CardProps> = ({ children, ...rest }) => {
  return <StyledCardBody {...rest}>{children}</StyledCardBody>;
};

export { BaseCard, BaseBodyCard };

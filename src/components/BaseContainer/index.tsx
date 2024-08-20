import { FC } from "react";
import { StyledContainer } from "./style";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}
const BaseContainer: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default BaseContainer;

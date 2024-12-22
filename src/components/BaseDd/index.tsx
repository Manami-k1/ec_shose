import { FC } from "react";
import { StyledDd } from "./style";

interface DdProps extends React.ComponentPropsWithoutRef<"dd"> {}
const BaseDd: FC<DdProps> = ({ children }) => {
  return <StyledDd>{children}</StyledDd>;
};
export default BaseDd;

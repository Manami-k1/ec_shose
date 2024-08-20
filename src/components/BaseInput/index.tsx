import { FC } from "react";
import { StyledFormInput, StyledSearchInput } from "./style";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  variant?: "form" | "search";
}

const BaseInput: FC<InputProps> = ({ variant, ...props }) => {
  if (variant === "form") {
    return <StyledFormInput {...props} />;
  }
  return <StyledSearchInput {...props} />;
};

export default BaseInput;

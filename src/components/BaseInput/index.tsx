import { FC } from "react";
import { StyledFormInput, StyledSearchInput } from "./style";
import { SpacingType } from "@/types/theme";

interface InputProps extends React.ComponentPropsWithRef<"input"> {
  variant?: "form" | "search";
  w?: "lg";
}

const BaseInput: FC<InputProps> = ({ variant, w, ...props }) => {
  if (variant === "form") {
    return <StyledFormInput w={w} {...props} />;
  }
  return <StyledSearchInput {...props} />;
};

export default BaseInput;

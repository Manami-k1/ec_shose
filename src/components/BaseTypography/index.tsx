import { FC } from "react";

interface TypographyProps extends React.ComponentPropsWithoutRef<"p"> {
  el?: "p" | "span";
}
const BaseTypography: FC<TypographyProps> = ({
  children,
  el = "p",
  ...props
}) => {
  if (el === "p") {
    return <p {...props}>{children}</p>;
  }
  return <span {...props}>{children}</span>;
};
export default BaseTypography;

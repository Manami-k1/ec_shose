import { FC } from "react";
import { ColorsType } from "@/types/theme";
import { StyledImage } from "./style";

interface ImageProps extends React.ComponentPropsWithoutRef<"img"> {
  src: string;
  alt: string;
}

const BaseImage: FC<ImageProps> = ({ children, color, ...rest }) => {
  return <StyledImage {...rest} />;
};
export default BaseImage;

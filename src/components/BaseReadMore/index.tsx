import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC } from "react";
import { InternalLinkProps } from "../BaseInternalLink";
import { StyledReadMore } from "./style";

export interface ReadMoreProps extends InternalLinkProps {}

const BaseReadMore: FC<ReadMoreProps> = ({ ...props }) => {
  return <StyledReadMore {...props}>もっと見る</StyledReadMore>;
};
export default BaseReadMore;

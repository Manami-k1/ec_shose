import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC, ReactNode } from "react";
import {
  StyledSlider,
  StyledSliderImage,
  StyledSliderItem,
  StyledSliderWrapper,
} from "./style";

export interface SliderProps {
  images: ImageType[];
}

export interface ImageType {
  src: string;
  alt: string;
}

interface SliderItemProps {
  children: ReactNode;
}

interface SliderImageProps {
  image: ImageType;
}

const BaseSliderItem: FC<SliderItemProps> = ({ children }) => {
  return <StyledSliderItem>{children}</StyledSliderItem>;
};
const BaseSliderImage: FC<SliderImageProps> = ({ image }) => {
  return <StyledSliderImage image={image} />;
};

const BaseSlider: FC<SliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "20%",
    pauseOnHover: false,
  };
  return (
    <StyledSliderWrapper>
      <StyledSlider {...settings}>
        {images.map((image) => (
          <BaseSliderItem>
            <BaseSliderImage image={image} />
          </BaseSliderItem>
        ))}
      </StyledSlider>
    </StyledSliderWrapper>
  );
};
export default BaseSlider;

import { FC, useEffect, useState } from "react";
import {
  StyledSlider,
  StyledSliderItem,
  StyledSliderNavigation,
} from "./style";

interface SliderType {
  images: ImageType[];
}

export interface ImageType {
  src: string;
  alt: string;
}

interface BaseSliderItemProps {
  image: ImageType;
  sliderWidth: number; // sliderWidthを受け取る
}

const BaseSliderItem: FC<BaseSliderItemProps> = ({ image, sliderWidth }) => {
  return <StyledSliderItem image={image} sliderWidth={sliderWidth} />;
};

const BaseSlider: FC<SliderType> = ({ images }) => {
  const [sliderWidth, setSliderWidth] = useState<number | undefined>(undefined); // 初期値をundefinedに設定

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth * 0.86;
      setSliderWidth(width * images.length);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [images.length]);

  return (
    <StyledSlider sliderWidth={sliderWidth || 0}>
      {/* sliderWidthがundefinedの場合に備え、0を指定 */}
      {[...images, ...images].map((image, index) => (
        <BaseSliderItem
          key={index}
          image={image}
          sliderWidth={sliderWidth || 0}
        />
      ))}
    </StyledSlider>
  );
};

export default BaseSlider;

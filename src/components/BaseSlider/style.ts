import styled from "@emotion/styled";
import { ImageType } from ".";
import Slider from "react-slick";
import { theme } from "@/styles/theme";

export const StyledSliderWrapper = styled.div`
  /* .slick-slide {
    width: calc(100% - 20px);
  } */
  /* .slick-dots {
    position: relative;
    margin-top: -18px;
  } */
`;

export const StyledSlider = styled(Slider)`
  /* width: calc(100% - 10px); */
`;

export const StyledSliderItem = styled.li`
  height: 450px;
  padding: 0 25px;
  background: ${theme.colors.main};
`;

export const StyledSliderImage = styled.div<{ image: ImageType }>`
  background: url(${({ image }) => image.src}) center / cover no-repeat;
  height: 100%;
`;

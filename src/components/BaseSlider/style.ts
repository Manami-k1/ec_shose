import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { ImageType } from ".";

const WIDTH = "86%";
// const MAXWIDTH = 2500;

// export const StyledSlider = styled.div<{ images: ImageType[] }>`
export const StyledSlider = styled.div<{ sliderWidth: number }>`
  background-color: ${theme.colors.gray};

  display: flex;
  gap: 50px;
  overflow: hidden;
  width: ${({ sliderWidth }) => Math.min(sliderWidth)}px;
`;

export const StyledSliderItem = styled.div<{
  image: ImageType;
  sliderWidth: number;
}>`
  background: url(${(props) => props.image.src}) center / cover;
  height: 100%;
  min-width: 800px;
  aspect-ratio: 2 / 1;
`;

export const StyledSliderNavigation = styled.div``;

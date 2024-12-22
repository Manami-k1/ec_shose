import BaseSlider from "../BaseSlider";

const images = [
  { src: "key-visual1.jpg", alt: "image1" },
  { src: "key-visual2.jpg", alt: "image2" },
  { src: "key-visual3.jpg", alt: "image3" },
];

const BaseKeyVisual = () => {
  return <BaseSlider images={images} />;
};

export default BaseKeyVisual;

// import { FC } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import keyVisual1 from "key-visual1.jpg";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { A11y, Navigation, Scrollbar, Pagination } from "swiper/modules";

import BaseSlider from "../BaseSlider";

// interface KeyVisualProps extends React.ComponentPropsWithoutRef<"div"> {}
// const BaseKeyVisual: FC<KeyVisualProps> = ({}) => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//       autoplay={{ delay: 5000 }}
//     >
//       <SwiperSlide>
//         <img src="key-visual1.jpg" alt="1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="key-visual2.jpg" alt="2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="key-visual3.jpg" alt="3" />
//       </SwiperSlide>
//     </Swiper>
//   );
// };
// export default BaseKeyVisual;

const images = [
  { src: "key-visual1.jpg", alt: "image1" },
  { src: "key-visual2.jpg", alt: "image2" },
  { src: "key-visual3.jpg", alt: "image3" },
];

const BaseKeyVisual = () => {
  return <BaseSlider images={images} />;
};

export default BaseKeyVisual;

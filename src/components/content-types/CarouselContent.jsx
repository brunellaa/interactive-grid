import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const CarouselContent = ({ data }) => {
  const { slides, settings } = data;
  return (
    <Swiper slidesPerView={1} navigation autoHeight={true} {...settings}>
      <img
        src="../assets/adidas/slides/appendix_i/Appendix_I_Page_01.jpg"
        alt="test"
      />
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <img src={slide} alt={"Test"} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselContent;

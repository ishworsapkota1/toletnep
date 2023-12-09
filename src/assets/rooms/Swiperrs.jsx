import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "./Cards";
// import "Rooms.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CardMedia } from "@mui/material";

const swiperr = ({ slides }) => {
  // const img = "room.jpg";
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={60}
      slidesPerView={3}
      navigation
      loop={true}
      // pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {/* {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img src={slide.image} alt="" />
        </SwiperSlide>
      ))} */}

      <SwiperSlide>
        <Cards image={"room4.jpg"}></Cards>
      </SwiperSlide>
      <SwiperSlide>
        <Cards image={"room1.jpg"}></Cards>
      </SwiperSlide>
      <SwiperSlide>
        <Cards image={"room2.0.jpg"}></Cards>
      </SwiperSlide>
      <SwiperSlide>
        <Cards image={"room3.png"}></Cards>
      </SwiperSlide>
      <SwiperSlide>
        <Cards image={"room.jpg"}></Cards>
      </SwiperSlide>
    </Swiper>
  );
};
export default swiperr;

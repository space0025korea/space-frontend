import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const Carousel = () => {
  const imagesPath = Array.from({ length: 5 }, (_, index) => `/images/main${index + 1}.jpeg`);

  return (
    <Swiper
      autoplay={{ delay: 4000 }}
      loop
      slidesPerView={1}
      modules={[EffectFade, Autoplay]}
      effect="fade"
    >
      <div className="swiper">
        <div className="swiper-wrapper">
          {imagesPath.map((item) => (
            <SwiperSlide key={item} className="min-h-screen min-w-full bg-yellow-100">
              <Image src={item} alt="main images" fill />
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
  );
};

export default Carousel;

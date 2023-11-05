import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const Carousel = () => {
  const imagesPath = Array.from({ length: 5 }, (_, index) => `/images/main${index + 1}.jpg`);

  return (
    <Swiper
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      loop
      slidesPerView={1}
      modules={[EffectFade, Autoplay]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={2000}
    >
      <div className="swiper">
        <div className="swiper-wrapper">
          {imagesPath.map((item) => (
            <SwiperSlide key={item} className="min-h-screen min-w-full">
              <div
                style={{ backgroundImage: `url(${item})` }}
                className="h-screen bg-cover bg-local bg-center bg-no-repeat"
              ></div>
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
  );
};

export default Carousel;

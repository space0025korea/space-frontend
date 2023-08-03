import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { ImgDataType } from "pages/portfolio/[id]";

type PropsType = {
  images: ImgDataType[];
  imageIndex: number;
};

const ImageDialog = ({ images, imageIndex }: PropsType) => {
  return (
    <Swiper
      loop
      initialSlide={imageIndex}
      slidesPerView={1}
      navigation={true}
      modules={[EffectFade, Navigation]}
      effect="fade"
    >
      <div className="swiper">
        <div className="swiper-wrapper">
          {images.map(({ attributes, id }) => (
            <SwiperSlide key={id} className="min-h-screen min-w-full">
              <Image src={attributes.url} alt="images" fill className="object-contain shadow-md" />
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
  );
};

export default ImageDialog;

import React, { MouseEvent, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
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
  const swiperRef = useRef<SwiperClass>();

  const handleImageClick = (e: MouseEvent) => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div>
      <Swiper
        loop
        initialSlide={imageIndex}
        slidesPerView={1}
        navigation={true}
        modules={[EffectFade, Navigation]}
        effect="fade"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <div className="swiper px-0">
          <div className="swiper-wrapper">
            {images.map(({ attributes, id }) => (
              <SwiperSlide key={id} className="min-h-screen">
                <Image
                  src={attributes.url}
                  alt="images"
                  fill
                  className="mx-auto max-w-6xl cursor-pointer object-contain"
                  onClick={handleImageClick}
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageDialog;

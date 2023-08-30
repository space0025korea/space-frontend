import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { ImgDataType } from "pages/portfolio/[id]";

type ThumbnailProps = {
  images: ImgDataType[];
  setOpen: Dispatch<SetStateAction<boolean>>;
  setImageIndex: Dispatch<SetStateAction<number>>;
};

const Thumbnails = ({ images, setOpen, setImageIndex }: ThumbnailProps) => {
  const onClick = (idx: number) => {
    setImageIndex(idx);
    setOpen(true);
  };

  return (
    <section>
      <ul className="mx-auto grid grid-cols-2 gap-4 lg:grid-cols-3 xl:max-w-3xl 2xl:max-w-6xl">
        {images.map(({ attributes, id }, idx) => (
          <button
            onClick={() => onClick(idx)}
            key={id}
            className="relative aspect-square bg-gray-100"
          >
            <Image
              src={attributes.url}
              alt="thumbnail"
              fill
              className="object-cover"
              priority={idx < 10}
              sizes="100%"
            />
          </button>
        ))}
      </ul>
    </section>
  );
};

export default Thumbnails;

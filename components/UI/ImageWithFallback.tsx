import React, { useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
const ImageWithFallback: React.FC<ImageProps & { fallbackSrc: string | StaticImageData }> = ({
  src,
  alt,
  fallbackSrc,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      alt={alt}
    />
  );
};
export default ImageWithFallback;

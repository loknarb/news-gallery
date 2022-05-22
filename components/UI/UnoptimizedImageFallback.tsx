import React, { useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
const UnoptimizedImageFallback: React.FC<ImageProps> = ({ src, ...rest }) => {
  const [ImageUnoptimized, setImageUnoptimized] = useState(false);

  return (
    <Image
      {...rest}
      unoptimized={ImageUnoptimized}
      src={src}
      onError={() => {
        setImageUnoptimized(true);
      }}
    />
  );
};
export default UnoptimizedImageFallback;

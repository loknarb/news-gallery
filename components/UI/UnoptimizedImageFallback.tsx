import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
const UnoptimizedImageFallback: React.FC<ImageProps> = ({ src, alt, ...rest }) => {
  const [ImageUnoptimized, setImageUnoptimized] = useState(false);

  return (
    <Image
      {...rest}
      unoptimized={ImageUnoptimized}
      src={src}
      onError={() => {
        setImageUnoptimized(true);
      }}
      alt={alt}
    />
  );
};
export default UnoptimizedImageFallback;

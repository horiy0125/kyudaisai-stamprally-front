import React from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  width?: number;
  height?: number;
};

const NextImage: React.VFC<Props> = ({ src, width, height }: Props) => {
  return <Image src={src} width={width} height={height} />;
};

export default NextImage;

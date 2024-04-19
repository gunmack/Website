import React from "react";
import Image from "next/image";


import building from './sfuSurrey.png'
 
export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={building}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  )
}
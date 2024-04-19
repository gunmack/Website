'use client'
import React, { useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react'
import './pages.css'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'


export function EmblaCarousel() {

    const metadata = {title:"Origins"}

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])

      const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
  
    return (
      <main>
     
        <div className="embla" ref={emblaRef}>
          
            <div className="embla__container">
              <div className="embla__slide">
                <h1 className="flex flex-col items-center justify-between">
                  Lobby of Surrey Central
                </h1>
                <Image src="/SRE/SRYC.jpg" alt="SRYC" width={1000} height={10} />
              </div>
              <div className="embla__slide">
                <h1 className="flex flex-col items-center justify-between">
                  Upper floor of Surrey Central
                </h1>
                <Image src="/SRE/sryc2.jpg" alt="SRYC" width={1000} height={250}/>
              </div>
              <div className="embla__slide">
                <h1 className="flex flex-col items-center justify-between">
                  View of Surrey Engineering Building
                </h1>
                <Image src="/SRE/SRcampus.jpg" alt="Surrey campus" width={1000} height={450}/>
              </div>
              {/* <div className="embla__slide">
                <h1 className="flex flex-col items-center justify-between">
                  Surrey Central at night
                </h1>
                <Image src="/SRE/sfuSurrey.png" alt="Surrey campus at night" width={1000} height={250}/>
              </div> */}
              <div className="embla__slide">
                <h1 className="flex flex-col items-center justify-between">
                  Outside view of Surrey Engineering Building
                </h1>
                <Image src="/SRE/SEEBout.jpg" alt="Surrey engineering building" width={1000} height={250}/>
              </div>
            </div>
          
        </div>
      </main> 
    )
}



export default EmblaCarousel;

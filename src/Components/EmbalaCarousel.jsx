import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      skipSnaps: false,
      containScroll: 'trimSnaps'
    }, 
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  )

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <img 
                src={banner1} 
                alt="Banner 1" 
                className="embla__slide__img"
              />
              <div className="embla__slide__overlay">
                <h2 className="embla__slide__title">Summer Collection</h2>
                <p className="embla__slide__subtitle">Discover the Latest Trends</p>
                <button className="embla__slide__button">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <img 
                src={banner2} 
                alt="Banner 2" 
                className="embla__slide__img"
              />
              <div className="embla__slide__overlay">
                <h2 className="embla__slide__title">New Arrivals</h2>
                <p className="embla__slide__subtitle">Fresh Styles Just Dropped</p>
                <button className="embla__slide__button">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './_EmblaCarousel.scss'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [selectedSnap, setSelectedSnap] = useState(0)

  const scrollTo = (index) => emblaApi?.scrollTo(index)
  const setupSnaps = (emblaApi) => setScrollSnaps(emblaApi.scrollSnapList())
  const setActiveSnap = (emblaApi) =>
    setSelectedSnap(emblaApi.selectedScrollSnap())

  useEffect(() => {
    if (!emblaApi) return

    setupSnaps(emblaApi)
    setActiveSnap(emblaApi)

    emblaApi.on('reInit', setupSnaps)
    emblaApi.on('reInit', setActiveSnap)
    emblaApi.on('select', setActiveSnap)
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><img src="https://carlospmendiola.com/downloads/Bootcamp-Slider/home-Slider-1.jpg" alt="The Race Track (Death on a Pale Horse)"/></div>
          <div className="embla__slide"><img src="https://carlospmendiola.com/downloads/Bootcamp-Slider/home-Slider-3.jpg" alt="La Cervara, the Roman Campagna"/></div>
          <div className="embla__slide"><img src="https://carlospmendiola.com/downloads/Bootcamp-Slider/home-Slider-2.jpg" alt="The Race Track (Death on a Pale Horse)"/></div>
          <div className="embla__slide"><img src="https://carlospmendiola.com/downloads/Bootcamp-Slider/home-Slider-4.jpg" alt="The Race Track (Death on a Pale Horse)"/></div>
          <div className="embla__slide"><img src="https://carlospmendiola.com/downloads/Bootcamp-Slider/home-Slider-5.jpg" alt="The Race Track (Death on a Pale Horse)"/></div>
          <div className="embla__slide"><img src="https://carlospmendiola.com/downloads/Bootcamp-Slider/home-Slider-6.jpg" alt="The Race Track (Death on a Pale Horse)"/></div>
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <button
            className="embla__dot"
            key={index}
            onClick={() => scrollTo(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}
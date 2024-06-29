import React, { useState } from 'react';
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows.component';

const HeroCarousal = () => {

  const [images, setImages] = useState([{
    adult: false,
    backdrop_path: "/jvPMJ2zM92jfXxVEFsqP1MMrLaO.jpg",
    genre_ids: [878, 28, 12],
    id: 823464,
    original_language: "en",
    original_title: "Godzilla x Kong: The New Empire",
    overview:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    popularity: 1248.903,
    poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    release_date: "2024-03-27",
    title: "Godzilla x Kong: The New Empire",
    video: false,
    vote_average: 7.2,
    vote_count: 2943,
  },
  {
    adult: false,
    backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
    genre_ids: [53],
    id: 985939,
    original_language: "en",
    original_title: "Fall",
    overview:
      "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights.",
    popularity: 6731.327,
    poster_path: "/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg",
    release_date: "2022-08-11",
    title: "Fall",
    video: false,
    vote_average: 7.4,
    vote_count: 346,
  },])

  const settingsLG = {
    arrows: true,
    slideshow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  }
  const settings = {
    arrows: true,
    lideshow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  }
  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider {...settings}>
          {
            images.map((images) => (
              <div className='w-full h-56 md:h-80 py-3'>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-cover' />
              </div>
            ))
          }

        </HeroSlider>
      </div>
      <div className='hidden lg:block'>
        <HeroSlider {...settingsLG}>
          {
            images.map((images) => (
              <div className='w-full h-96 px-2 py-3'>
                <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-cover' />
              </div>
            ))
          }

        </HeroSlider>
      </div>
    </>
  )
}

export default HeroCarousal;

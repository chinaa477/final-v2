import React from "react"
import { Autoplay, EffectCreative, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import bannerData from '../../../content/home/banner.json'
const data = bannerData.banner;

const sliderSettings = {
  slidesPerView: '1',
  loop: true,
  parallax: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  autoplay: {
    delay: 5000,
  },
};

const Banner = () => {
  return (
    <div>
      <Swiper modules={[Autoplay, EffectCreative, Parallax]} {...sliderSettings} className="banner-slider">
        {data.map((data, index) => (
          <SwiperSlide key={`banner-${index}`}>
            <div className="relative z-10 container mx-auto">
              <div
                className="w-full h-[600px]"
                style={{
                  background: `linear-gradient(to right,RGBA(0,0,0,.2) 0%,RGBA(0,0,0,.5) 100%) 58% 11% / cover no-repeat,url(${data.image}) 58% 11% / cover no-repeat`,
                }}
              />
              <div className="absolute z-20 top-[20%] left-[2rem] right-[2rem] text-white" data-swiper-parallax="-1000">
                <div className="text-5xl font-semibold leading-normal" >
                  {data.title}
                </div>
                <div className="text-xl font-normal leading-normal pt-4">
                  {data.description}
                </div>
              </div>
            </div>
            <div
              data-swiper-parallax={"23%"}
              className="slider-bg absolute top-0 left-0 w-full h-[600px]"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
};

export default Banner

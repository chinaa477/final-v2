import React from "react"
import { Autoplay, EffectCreative, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import slide1 from '../../images/banner/1.jpg'
import slide2 from '../../images/banner/2.jpg'
import slide3 from '../../images/banner/3.jpg'
import slide4 from '../../images/banner/4.jpg'
import slide5 from '../../images/banner/5.jpg'
import slide6 from '../../images/banner/6.jpg'
import slide7 from '../../images/banner/7.jpg'
import slide8 from '../../images/banner/8.jpg'
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
    delay: 50000,
  },
};

const Banner = () => {
  return (
    <div>
      <Swiper modules={[Autoplay, EffectCreative, Parallax ]} {...sliderSettings} className="banner-slider">
        {data.map((data, index) => (
          <SwiperSlide key={`banner-${index}`}>
            <div className="relative z-10 container flex mx-auto">
              <div
                className="w-full h-[600px]"
                style={{
                  backgroundImage: `url(${data.image})`,
                  backgroundPositionX: '58%, 58%',
                  backgroundPositionY: '11%, 11%',
                  backgroundSize: 'cover, cover',
                  backgroundRepeatX: 'no-repeat, no-repeat',
                  backgroundRepeatY: 'no-repeat, no-repeat',
                }}
              />
              {/* <div className="title" data-swiper-parallax="-300">
                Slide 1
              </div> */}
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

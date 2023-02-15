import React from "react"
import divider from '../../images/divider.png'
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const sliderSettings = {
    slidesPerView: '1',
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
    },
};

const OurCompany = () => {
    return (
        <section className="grid grid-cols-1 items-center w-full mx-auto pt-16 pb-24 bg-light">
            <div className="relative flex items-center justify-center overflow-hidden pb-24">
                <div className="container mx-auto grid items-center justify-center text-center gap-8">
                    <h2 className="text-primary text-[2.75rem]">Our Company</h2>
                    <h3 className="text-dark-muted tracking-[.5rem] text-xl font-medium">SERVING THE BEST</h3>
                    <img className="mx-auto" src={divider} />
                    <p className="text-dark-muted font-semibold text-base leading-7 px-52">
                        Fantastic food merits incredible regard. We carry that marvel to each dish we make.We centre around newness and flavor first. We do not utilize counterfeit hues and fake flavors.
                    </p>
                </div>
            </div>
            <div className="container mx-auto -mb-80">
                <div className="px-72">
                    <Swiper modules={[Autoplay, EffectFade]} {...sliderSettings} className="shadow-2xl">
                        <SwiperSlide>
                            <img src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2019/12/hfe31.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2019/12/hfe36.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2019/12/hfe35.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2019/12/hfe33.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default OurCompany

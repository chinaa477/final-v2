import React from "react"
import divider from '../../images/divider.png'
import { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '../../../content/about-us/our-company.json'

const OurCompany = () => {
    return (
        <section className="grid grid-cols-1 items-center w-full mx-auto pt-16 pb-24 bg-light">
            <div className="relative flex items-center justify-center overflow-hidden pb-24">
                <div className="container mx-auto grid items-center justify-center text-center gap-8">
                    <h2 className="text-primary text-[2.75rem]">{data.heading}</h2>
                    <h3 className="text-dark-muted tracking-[.5rem] text-xl font-medium">{data.subHeading}</h3>
                    <img className="mx-auto" src={divider} />
                    <p className="text-dark-muted font-semibold text-base leading-7 px-52">
                        {data.description}
                    </p>
                </div>
            </div>
            <div className="container mx-auto -mb-80">
                <div className="px-72">
                    <Swiper loop={true} navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                        modules={[Navigation, Autoplay, EffectFade]}
                        className="shadow-2xl">
                        <div className="absolute inset-y-0 left-2 z-10 flex items-center">
                            <button className="swiper-button-prev -ml-2 lg:-ml-4 flex justify-center items-center shadow focus:outline-none after:text-white"></button>
                        </div>
                        <div className="absolute inset-y-0 right-2 z-10 flex items-center">
                            <button className="swiper-button-next -mr-2 lg:-mr-4 flex justify-center items-center shadow focus:outline-none after:text-white"></button>
                        </div>
                        {data.gallery.map((gallery, index) => (
                            <SwiperSlide key={`gallery-${index}`}>
                                <img src={gallery.image} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default OurCompany

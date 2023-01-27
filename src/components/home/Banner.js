import React from 'react';
import slide1 from '../../images/banner/slider/slide-1.png'
import slide2 from '../../images/banner/slider/slide-2.png'
import slide3 from '../../images/banner/slider/slide-3.png'
import slide4 from '../../images/banner/slider/slide-4.png'
import slide5 from '../../images/banner/slider/slide-5.png'
import slide6 from '../../images/banner/slider/slide-6.png'
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { StyledBanner } from './styles';
import { Link } from "react-scroll";

const data = [slide1, slide2, slide3, slide4, slide5, slide6]

const sliderSettings = {
    slidesPerView: '1',
    loop: true,
    autoplay: {
        delay: 2000,
    },
};

export default function Banner() {
    return (
        <StyledBanner className='hero-wrapper'>
            <div className='hero'>
                <div className='left'>
                    <h1>India's Most <span>Teacher-Friendly </span>Ed-tech Platform Focused on Student Outcomes</h1>
                    <h2>Our solutions include Foundation programs for classes 6th to 10th, Competitive program for 11th & 12th, Virtual labs, Augmented Reality Experiences, Global Spelling Bee Championships & AI-Based NEP 2020 Psychometric Program.</h2>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={2000}
                        className="cta"
                    >
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.107217 5.12613C0.153229 4.96601 0.198849 4.80549 0.245774 4.64537C0.415571 4.06305 0.718973 3.56057 1.1315 3.11575C1.40731 2.8185 1.732 2.58426 2.07134 2.37903C2.56532 2.08035 3.20269 2.18583 3.57052 2.66503C3.97338 3.18973 4.3663 3.72199 4.7634 4.25178C4.99202 4.55687 5.21843 4.86405 5.44822 5.16823C5.85814 5.71043 5.79225 6.38715 5.26522 6.82464C4.93346 7.09993 4.58 7.34934 4.23426 7.60737C4.13792 7.67913 4.03309 7.74005 3.93244 7.80593C4.30575 8.83217 4.72534 9.79985 5.32848 10.678C6.25982 12.0339 7.21652 12.8128 8.25244 13.5696C8.53622 13.3538 8.82338 13.1342 9.11176 12.9161C9.25764 12.8058 9.40221 12.6932 9.55267 12.5893C9.99803 12.2816 10.5149 12.2707 10.9452 12.5928C11.1121 12.7175 11.2401 12.9005 11.3683 13.0701C11.9366 13.8212 12.4961 14.5792 13.0645 15.3303C13.2264 15.544 13.2893 15.787 13.3263 16.0429C13.3107 16.151 13.2953 16.259 13.2798 16.3667C13.2028 16.5046 13.1477 16.6628 13.0443 16.7772C12.7185 17.1379 12.3234 17.418 11.8875 17.628C11.085 18.0138 10.249 18.1149 9.3765 17.8892C8.44305 17.6476 7.58664 17.2394 6.77841 16.7236C6.14392 16.3186 5.55741 15.849 5.00748 15.3366C4.31731 14.6936 3.68543 13.9953 3.11485 13.244C2.56181 12.5157 2.0341 11.7694 1.5609 10.9856C1.02208 10.0931 0.553368 9.16972 0.265252 8.16219C0.0983293 7.57893 -0.00205938 6.98653 3.205e-05 6.37871C0.000554908 6.208 0.000554908 6.03729 0.000554908 5.86656C0.0366313 5.61991 0.0720551 5.37312 0.107218 5.1262L0.107217 5.12613Z" fill="#224E89" />
                            <path d="M12.6376 10.7905C12.6277 10.7905 12.6177 10.7902 12.6074 10.79C12.1885 10.7736 11.862 10.4207 11.8783 10.0017C11.9307 8.65395 11.4509 7.60428 10.4521 6.88199C9.69339 6.33326 8.91043 6.17482 8.90283 6.17338C8.49057 6.09573 8.21945 5.69901 8.29672 5.28674C8.37397 4.87448 8.77159 4.60336 9.18335 4.68063C10.7019 4.96611 13.5362 6.45768 13.396 10.0605C13.3801 10.4695 13.0433 10.7904 12.6377 10.7904L12.6376 10.7905Z" fill="#224E89" />
                            <path d="M17.2341 11.5119C17.2242 11.5119 17.2142 11.5116 17.2039 11.5114C16.7849 11.495 16.4585 11.1421 16.4748 10.7232C16.6009 7.4821 15.4359 4.95013 13.012 3.19701C11.1794 1.87181 9.31137 1.50934 9.29297 1.50583C8.88071 1.42818 8.60959 1.03145 8.68686 0.619192C8.76412 0.206928 9.16173 -0.0639205 9.57349 0.0130777C9.66342 0.0300705 11.7973 0.444046 13.9023 1.96607C15.8696 3.38878 18.1761 6.07298 17.9928 10.7819C17.9765 11.1911 17.6402 11.5118 17.2344 11.5118L17.2341 11.5119Z" fill="#224E89" />
                        </svg>
                        Talk To Our Team
                    </Link>
                </div>
                <div className='right'>
                    <Swiper modules={[Autoplay, EffectFade]} {...sliderSettings} className="banner-slider">
                        {data.map((data, index) => (
                            <SwiperSlide key={`banner-${index}`}>
                                <img
                                    src={data}
                                    alt="banner"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </StyledBanner>
    );
}

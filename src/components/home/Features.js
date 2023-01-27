import React from 'react';
import img1 from '../../images/features/img-1.svg'
import img2 from '../../images/features/img-2.svg'
import img3 from '../../images/features/img-3.svg'
import img4 from '../../images/features/img-4.svg'
import img5 from '../../images/features/img-4.svg'
import img6 from '../../images/features/img-4.svg'
import img7 from '../../images/features/img-4.svg'
import img8 from '../../images/features/img-4.svg'
import img9 from '../../images/features/img-4.svg'
import img10 from '../../images/features/img-4.svg'
import bg from '../../images/features/bg.png'

import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { StyledFeatures } from './styles';
import FeaturesList from './FeaturesList';


const data = [
    {
        image: img1,
        heading: 'Custom Student Reports',
        description: 'Every student is different. Teachers can now see exactly how each student learns and make better, more informed decisions about how to teach, how to grade and how to support each student.',
    },
    {
        image: img2,
        heading: 'End to End LMS',
        description: 'Erudex offers a state-of-the-art learning management system that allows you to create, manage, and deliver lessons. It can be used by students, teachers, and administrators.',
    },
    {
        image: img3,
        heading: 'JEE & NEET Program',
        description: 'Taking education beyond the classroom, we have created a comprehensive platform for competitive exam preparation like JEE/BITSAT/NEET for classes 6th to 12th',
    },
    {
        image: img4,
        heading: 'Assessment & Testing',
        description: 'The Erudex assessment module is designed to help you get real-time, detailed insights into student performance and make informed decisions using tests and homework.',
    },
    {
        image: img5,
        heading: 'Foundation Programs',
        description: "Erudex E-Foundation, E-Techno & Competitive programmes assist students to study for the JEE, NEET, NTSE and other exams. The platform focuses on developing students' knowledge in STEM subjects.",
    },
    {
        image: img6,
        heading: 'Books & Study Material',
        description: "Erudex's Foundation PCMB for IIT-JEE/NEET/Olympiad books will serve as a connection between Boards and Competitions by covering all the basics of a subject in great detail.",
    },
    {
        image: img7,
        heading: 'AR Experiences',
        description: 'With the help of Erudex  AR experiences, you can turn your projects, books, events, and lessons into interactive experiences by embedding augmented reality content into them.',
    },
    {
        image: img8,
        heading: 'Virtual Labs',
        description: 'An experimental learning platform, Erudex Virtual Labs is capable of running highly interactive, customized virtual labs and immersive 3-D simulations in an advanced virtual lab setting.',
    },
    {
        image: img9,
        heading: 'Spelling Bee',
        description: 'Erudex The Global Spelling Bee Championship helps your child excel at reading & writing, build their speaking skills and gain competency in vocabulary & word knowledge. For students in classes 1st to 12th.',
    },
    {
        image: img10,
        heading: 'Psychometric Tests',
        description: 'The PRIDE assessment helps us understand the different abilities a child has. Whether these abilities are dormant, dominant, or preferred, knowing this will enable parents to develop the correct path for them.',
    },
];
const sliderSettings = {
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    centeredSlides: true,
};
export default function Features() {
    return (
        <div id='features'>
            <StyledFeatures className='features-wrapper'>
                <h4>Built for your students, with your school in mind!</h4>
                <h6>Our AI-driven JEE & NEET products, developed by the best faculty from IIT's and top medical colleges, offer a comprehensive curriculum with world-class quality of content and delivery.</h6>
                <div className='slider-wrapper'>

                    <Swiper modules={[Autoplay, EffectFade]} {...sliderSettings} className="features-slider">
                        <div className='bg'>
                            <img src={bg} alt="" />
                        </div>

                        {data.map((data, index) => (
                            <SwiperSlide key={`product-${index}`}>
                                <img
                                    src={data.image}
                                    alt="products"
                                />
                                <h3>{data.heading}</h3>
                                <p>{data.description}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </StyledFeatures>
            <FeaturesList />
        </div>
    );
}

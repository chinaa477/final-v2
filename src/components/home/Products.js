import React from 'react';
import img1 from '../../images/success-stories/virtual-labs.png'
import img2 from '../../images/success-stories/psychometric-tests.png'
import img3 from '../../images/success-stories/augmented-reality.png'
import img4 from '../../images/success-stories/spelling-bee.png'
import img5 from '../../images/eduaccess/banner.png'

import { StyledProducts } from './styles';
import { Link } from 'gatsby';


const data = [
    {
        image: img1,
        heading: 'Advanced 3D interactive Virtual Labs to your classrooms',
        description: 'Students can enjoy high-level 360° interactive experiences to deepen their learning in STEM subjects.',
        linkId: '/virtual-labs'
    }, {
        image: img2,
        heading: 'Know your child with Advanced Psychometric tests ',
        description: "Our AI-based testing platform will analyse your child’s performance, personality traits, and help you unlock their future potential",
        linkId: '/psychometric-tests'
    }, {
        image: img3,
        heading: 'Augmented reality for better concept clarity',
        description: 'Our creative & Interactive AR content helps students visualize concepts & shorten the learning curve.',
        linkId: '/ar-classes'
    }, {
        image: img4,
        heading: 'Build Vocabulary & English Reading, Speaking Skills',
        description: "Let your students participate in Erudex The Global Spelling Bee Championship, with a legacy of 20+ years. Compete at a global level.",
        linkId: 'https://theglobalspellingbee.erudex.com/'
    }, {
        image: img5,
        heading: 'School Accreditation, Affiliation & Audit services',
        description: "Our creative & Interactive AR content helps students visualize concepts & shorten the learning curve.",
        linkId: '/eduaccess'
    }
];
export default function Products() {
    return (
        <StyledProducts className='products-section' id='products'>
            <h4>Delivering Better Outcomes through Technology </h4>
            <h6>As part of our vision to provide the best education to students, we have implemented a range of solutions for educational institutions across the globe. Our Education solutions are designed to deliver better outcomes by empowering all stakeholders.</h6>
            {data.map((data, index) => (
                <div key={`products-${index}`} className='wrapper' id={data.linkId}>
                    <div className='left'>
                        <div className='heading'>{data.heading}</div>
                        <div className='description'>{data.description}</div>
                        <Link to={data.linkId}>Learn more</Link>
                    </div>
                    <div className='right'>
                        <img src={data.image} alt='' className='drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]' />
                    </div>
                </div>
            ))}
        </StyledProducts>
    );
}

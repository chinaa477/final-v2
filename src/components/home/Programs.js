import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { StyledPrograms } from './styles';
import MobileCTA from '../layout/MobileCTA';

const data = [
    {
        heading: 'E-Foundation',
        description: 'Erudex integrated solutions for students in classes 6th to 10th',
        list: [
            {
                item: 'JEE & NEET program with a focus on boards',
            }, {
                item: 'Logins for teachers and management',
            }, {
                item: 'Foundation Books for CBSE | State boards',
            }, {
                item: 'Digital content, PPTs, webinars & curriculum by experts',
            }, {
                item: 'Online Tests (1000’s of pre-loaded questions)',
            }, {
                item: 'Customized reports & dashboards',
            }
        ],
    }, {
        heading: 'E-Techno',
        description: 'Erudex solutions for high achievers in classes 6th to 10th',
        list: [
            {
                item: 'Intense JEE & NEET program that covers topics upto 12th',
            }, {
                item: 'Foundation Books for CBSE | State boards',
            }, {
                item: 'Digital content, PPTs, webinars & curriculum by experts',
            }, {
                item: 'Dedicated success managers & continuous teacher training.',
            }, {
                item: 'Online & Offline Tests, with logins for all stakeholders',
            }, {
                item: 'Customized reports & student dashboards',
            }
        ],
    }, {
        heading: 'JEE & NEET',
        description: 'Erudex solutions for K-12 colleges & competitive exams',
        list: [
            {
                item: 'JEE & NEET program for classes 11th & 12th',
            }, {
                item: 'JEE & NEET exam preparation books',
            }, {
                item: 'Expert course work designed by IITians',
            }, {
                item: 'Online Tests (1000’s of pre-loaded questions)',
            }, {
                item: 'Dedicated success managers & continuous teacher training.',
            }, {
                item: 'Rank analysis reports & student dashboards',
            }
        ],
    },
];
export default function Programs() {
    return (
        <StyledPrograms className='programs-section' id='programs'>
            <div className='heading-wrapper'>
                <div>
                    <h4>
                        Products & Programs
                    </h4>
                    <h6>
                        With Erudex, you have flexible plans curated based on your school's needs. Get budget-friendly solutions to fit your budget & let us handle all of the work.
                    </h6>
                </div>
                <MobileCTA />

            </div>
            <div className='wrapper'>
                {data.map((data, index) => (
                    <div key={`pricing-${index}`} className='list'>
                        {index === 2 &&
                            <div className='most-popular'>MOST POPULAR</div>
                        }
                        <div className='heading'>{data.heading}</div>
                        <div className='description'>{data.description}</div>
                        <ul className='feature-list'>
                            {data.list.map((listData, index) => (
                                <li key={index}>
                                    <div className='icon'>
                                        <BsCheckLg size='10px' />
                                    </div>
                                    <span className='item-text'>{listData.item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </StyledPrograms>
    );
}

import React from 'react';
import MobileCTA from '../layout/MobileCTA';
import { StyledGetStarted } from './styles';

export default function GetStarted() {
    return (
        <StyledGetStarted className='get-started'>
            <div className='wrapper'>
                <div className='chip'>GET STARTED</div>
                <div className='heading'>Partner with Erudex to <span>Make Learning Personal</span> for Every Student</div>
                <div className='description'>Our digital learning platform unlocks your school's full potential. Gain a competitive edge over your competitors.</div>
                <MobileCTA />
            </div>
        </StyledGetStarted>
    );
}

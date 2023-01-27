import React from 'react';
import { StyledContact } from './styles';

export default function Contact() {
    return (
        <StyledContact className='contact' id='contact'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='heading'>Schedule A Call With Our Experts</div>
                    <div className='description'>
                        <p>Our JEE & NEET experts can help you understand how Erudex can add value to your school through its world-class programs.</p>
                        <p>Boost your revenue & increase your school or college's goodwill Today!</p>
                    </div>
                </div>
                <div className='right'>
                    <h4>Help your students realise their full potential with Erudex</h4>
                    <iframe frameBorder="0" title="Signup Form" id="iframewin" width="100%" height="100%" src="https://zc1.maillist-manage.in/ua/Optin?od=1a1e3db29a695&zx=1df902b74b&tD=118703e578a006b1&sD=118703e578a0079c"></iframe>
                </div>
            </div>
        </StyledContact>
    );
}

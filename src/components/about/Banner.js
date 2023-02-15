import React from "react"
import divider from '../../images/divider.png'

const Banner = () => {
    return (
        <section className="pt-32 grid grid-cols-1 items-center w-full mx-auto">
            <div className="relative flex items-center justify-center h-[60vh] overflow-hidden about-wrapper">
                <div className="header container mx-auto grid items-center justify-center text-center gap-8 z-10">
                    <img className="mx-auto" src={divider} />
                    <h2 className="text-primary text-lg">Know More</h2>
                    <h3 className="text-white tracking-[.25rem] text-8xl font-medium">About Us.</h3>
                    <p className="text-white opacity-90 text-base leading-7 px-72">
                        Houseful events is an event management bureau stemmed from Chennai, Tamilnadu which was created to couple our fervency for occupation and events. We bring a divergent approach to the event management industry. Our unite totally understand that a well accomplished event can be a support to client’s loyalty,firm’s vision and also in building nexus.
                    </p>
                </div>
                <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                    <source src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2019/12/Pexels-Videos-1672803.mp4" type="video/mp4" />Your browser does not support the video tag.
                </video>
                <div className="background-overlay"></div>
            </div>
        </section>
    )
};

export default Banner

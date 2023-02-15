import React from "react"
import divider from '../../images/divider.png'
import data from '../../../content/about-us/banner.json'

const Banner = () => {
    return (
        <section className="pt-32 grid grid-cols-1 items-center w-full mx-auto">
            <div className="relative flex items-center justify-center h-[60vh] overflow-hidden about-wrapper">
                <div className="header container mx-auto grid items-center justify-center text-center gap-8 z-10">
                    <img className="mx-auto" src={divider} />
                    <h2 className="text-primary text-3xl font-medium">{data.heading}</h2>
                    <h3 className="text-white text-8xl font-normal">{data.title}</h3>
                    <p className="text-white opacity-90 text-lg leading-7 px-64">
                        {data.description}
                    </p>
                </div>
                <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                    <source src={data.video} type="video/mp4" />Your browser does not support the video tag.
                </video>
                <div className="background-overlay"></div>
            </div>
        </section>
    )
};

export default Banner

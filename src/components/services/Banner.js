import React from "react"
import divider from '../../images/divider.png'
import data from '../../../content/about-us/banner.json'

const Banner = () => {
    return (
        <section className="grid items-center pt-32">
            <div className="grid items-center mx-auto md:px-32 px-5 md:pb-36 pb-10 md:pt-20 pt-8 bg-gradient-3">
                <div className="header container mx-auto grid items-center justify-center text-center gap-8 z-10">
                    <img className="mx-auto" src={divider} />
                    <h2 className="text-primary text-3xl font-medium">{data.heading}</h2>
                    <h3 className="text-white text-8xl font-normal">{data.title}</h3>
                    <p className="text-white opacity-90 text-lg leading-7 px-64">
                        {data.description}
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Banner

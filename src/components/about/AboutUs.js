import React from "react"
import { Link } from 'gatsby'
import data from '../../../content/about-us/about-us.json'

const AboutUs = () => {
    return (
        <section className="grid items-center container mx-auto px-10 md:pb-32 pb-8 pt-80">
            <div className="grid grid-cols-2 gap-8 items-center">
                <div className="grid">
                    <h2 className="text-primary text-[2.75rem] font-medium">{data.heading}</h2>
                    <div className="w-[50px] bg-primary h-[2px] my-8"></div>
                    <p className="text-dark-muted font-semibold text-sm leading-7 pr-16 mb-10">
                        {data.description}
                    </p>
                    <Link to={`/`} className={"mr-auto px-8 py-2 border-double border-x-2 border-y-4 tracking-widest font-semibold rounded-full border-primary text-primary hover:bg-primary hover:text-white"}>VIEW MENU</Link>
                </div>
                <div>
                    <img src={data.file} alt="" />
                </div>
            </div>
        </section>
    )
};

export default AboutUs

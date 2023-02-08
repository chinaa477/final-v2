import React from "react"
import serviceData from '../../../content/home/services.json'
const data = serviceData;
const OurServices = () => {
    return (
        <section className="service-list-wrapper">
            <div className="pt-36 pb-24 bg-dark">
                <div className="header container mx-auto grid items-center justify-center text-center gap-8">
                    <h2 className="text-primary text-4xl">{data.heading}</h2>
                    <h3 className="text-white tracking-[.5em] text-lg font-medium">{data.subHeading}</h3>
                    <img className="mx-auto" src={data.image} alt="" />
                    <p className="text-white opacity-90 italic text-sm">{data.paragraph}</p>
                </div>
            </div>
            <div className="services-list">
                <div className="container mx-auto grid md:px-12 px-5 py-20">
                    <div className="grid gap-12 grid-cols-3">
                        {data.services.map((list, index) => (
                            <div className="grid grid-cols-2 items-center gap-4" key={`service-${index}`}>
                                <div className="grid justify-end">
                                    <img className="rounded-full shadow-lg" src={list.image} alt="" />
                                </div>
                                <span className="text-3xl">{list.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurServices

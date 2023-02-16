import React from "react"
import serviceData from '../../../content/home/services.json'
const data = serviceData

const OurServices = () => {
    return (
        <div className="services-list">
            <div className="container mx-auto grid md:px-12 px-5 py-20">
                <div className="grid gap-12 grid-cols-3">
                    {data.services.map((list, index) => (
                        <div className="grid grid-cols-2 items-center gap-4" key={`service-${index}`}>
                            <div className="grid justify-end">
                                <img className="rounded-full shadow-2xl" src={list.image} alt="" />
                            </div>
                            <span className="text-3xl">{list.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default OurServices

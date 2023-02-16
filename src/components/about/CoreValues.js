import React from "react"
import data from '../../../content/about-us/core-values.json'

const CoreValues = () => {
    return (
        <section className="grid items-center mt-12 mx-auto md:px-32 px-5 md:pb-40 pb-10 md:pt-40 pt-8 bg-gradient-2">
            <div className="grid grid-cols gap-4 items-center">
                <h5 className="text-white text-5xl font-thin">{data.heading}</h5>
                <p className="text-white text-sm pt-16 leading-7">
                    {data.description}
                </p>
            </div>
        </section>
    )
};

export default CoreValues

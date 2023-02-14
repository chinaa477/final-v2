import React from "react"
import CTA from "../common/CTA";
import data from '../../../content/home/about.json'
import divider from '../../images/divider.png'

const About = () => {
    return (
        <section className="grid items-center container mx-auto px-10 md:py-32 py-8">
            <div className="grid grid-cols-3 gap-8 items-center">
                <div>
                    <div className="flex flex-col gap-y-10 items-center">
                        <img src={data.image} alt="" />
                        <h2 className="text-3xl text-primary font-semibold">{data.heading}</h2>
                        <img src={divider} />
                        <h3 className="text-lg text-black font-medium uppercase">{data.subHeadingOne}</h3>
                        <h4 className="text-normal font-semibold">{data.subHeadingTwo}</h4>
                        <p className="text-lg font-medium text-center">
                            {data.paragraph}
                        </p>
                        <CTA name="RESERVATIONS"
                            border="border-primary"
                            color="text-primary"
                            textHover="hover:text-white"
                            bgHover="hover:bg-primary"
                        />
                    </div>
                </div>
                <div>
                    <img src={data.rightImageOne} alt="" />
                </div>
                <div>
                    <img src={data.rightImageTwo} alt="" />
                </div>
            </div>
        </section>
    )
};

export default About

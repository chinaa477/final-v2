import React from "react"
import CTA from "../common/CTA";

const About = () => {
    return (
        <section className="grid items-center container mx-auto md:px-32 px-5 md:py-10 py-8">
            <div className="grid grid-cols-3 gap-4 items-center">
                <div>
                    <div className="flex flex-col gap-y-10 items-center">
                        <img src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2019/12/bbbq-free-img.png" />
                        <h2 className="text-3xl text-primary font-semibold">About Us</h2>
                        <img src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2019/12/divider-free-img-1.png" />
                        <h3 className="text-lg text-black font-medium uppercase">Our Stroy</h3>
                        <h4 className="text-normal font-semibold">Making Events Unforgettable</h4>
                        <p className="text-lg font-medium text-center">
                            We at House Full Events pride ourselves on providing the best in class event management services coupled with the delicious delicacies of South India. Our team of cooks and event coordinators with their years of experience in this field will guarantee all your requirements are satisfied and more.
                        </p>
                        <CTA name="RESERVATIONS" />
                    </div>
                </div>
                <div className="">
                    <img src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2020/08/veg-fried-rice.jpg" />
                </div>
                <div className="">
                    <img src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2019/12/hfe8.jpg" />
                </div>
            </div>
        </section>
    )
};

export default About

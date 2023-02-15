import React from "react"
import { Link } from 'gatsby'

const AboutUs = () => {
    return (
        <section className="grid items-center container mx-auto px-10 md:pb-32 pb-8 pt-80">
            <div className="grid grid-cols-2 gap-8 items-center">
                <div className="grid">
                    <h2 className="text-primary text-[2.75rem] font-medium">A few words about us</h2>
                    <div className="w-[50px] bg-primary h-[2px] my-8"></div>
                    <p className="text-dark-muted font-semibold text-sm leading-7 pr-16 mb-10">
                        Throughout the years we have developed cozy associations with farmers and providers of organic products, vegetables, flavors, chicken, fish, egg, meat items and so on., who share our perspective and doing things totally consummate in sourcing the best of that sort.
                    </p>
                    <Link to={`/`} className={"mr-auto px-8 py-2 border-double border-x-2 border-y-4 tracking-widest font-semibold rounded-full border-primary text-primary hover:bg-primary hover:text-white"}>VIEW MENU</Link>
                </div>
                <div>
                    <img src="https://via.placeholder.com/500x400" alt="" />
                </div>
            </div>
        </section>
    )
};

export default AboutUs

import React from "react"
import CTA from "../common/CTA"

const Contact = () => {
    return (
        <>
            <section className="grid items-center mt-12 mx-auto md:px-32 px-5 md:pb-36 pb-10 md:pt-20 pt-8 bg-gradient-1">
                <div className="grid grid-cols gap-4 items-center z-10">
                    <div className="flex flex-col gap-y-10 items-center">
                        <div className="grid grid-cols-3 gap-12 items-center">
                            <div className="border-double border-white border-t-4 w-52"></div>
                            <div className="mx-auto">
                                <img src="https://housefullevents.virajtechnologies.com/wp-content/uploads/2019/12/bbq-free-img.png" alt="" />
                            </div>
                            <div className="border-double border-white border-t-4 w-52"></div>
                        </div>
                        <h5 className="text-white text-xl">
                            Menu to Match The Occasion
                        </h5>
                        <CTA name="RESERVE A TABLE"
                            border="border-white"
                            color="text-white"
                            textHover="hover:text-muted"
                            bgHover="hover:bg-white"
                        />
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact

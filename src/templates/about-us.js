import React from "react"
import AboutUs from "../components/about/AboutUs";
import Banner from "../components/about/Banner";
import CoreValues from "../components/about/CoreValues";
import OurCompany from "../components/about/OurCompany";
import Review from "../components/about/Review";
import Layout from '../components/Layout'

const aboutUs = () => {
    return (
        <Layout>
            <Banner />
            <OurCompany />
            <AboutUs />
            <CoreValues />
            <Review />
        </Layout>
    )
};

export default aboutUs

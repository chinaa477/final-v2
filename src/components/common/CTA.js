import React from "react"
import { Link } from 'gatsby'

const CTA = (props) => {
    return (
        <Link to={`/`} className="text-primary bg-white hover:bg-primary hover:text-white px-8 py-4 border-double border-x-2 border-y-4 tracking-widest font-semibold border-primary rounded-full">{props.name}</Link>
    )
};

export default CTA

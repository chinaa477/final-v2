import React from "react"
import { Link } from 'gatsby'

const CTA = (props) => {
    return (
        <Link to={`/`} className={`px-8 py-2 border-double border-x-2 border-y-4 tracking-widest font-semibold rounded-full ${props.border} ${props.color} ${props.textHover} ${props.bgHover}`}>{props.name}</Link>
    )
};

export default CTA

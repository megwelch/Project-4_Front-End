import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ShowCard = ({ show: {image, name, rating, id}}) => {
    return (
        <>
        <Link to = {`/tvshow/:${id}`}>
            <p>{name}</p>
            {image ? 
            (<img src={image.medium} alt={name} />)
            : 
            (<div className="missing-img-div"><img src=""/><h1>no photo available</h1></div>)}
        </Link>
        </>
    )
}

export default ShowCard
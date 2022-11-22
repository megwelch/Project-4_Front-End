import React from "react";
import styled from 'styled-components'

const ShowCard = ({ show: {image, name, rating, id}}) => {
    return (
        <>
            <p>{name}</p>
            {image ? 
            (<img src={image.medium} alt={name} />)
            : 
            (<div className="missing-img-div"><img src=""/><h1>no photo available</h1></div>)}
        </>
    )
}

export default ShowCard
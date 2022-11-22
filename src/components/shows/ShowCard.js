import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Card }from 'react-bootstrap'

const ShowCard = ({ show: {image, name, rating, id}}) => {
    return (
        <>
        <Link style={{textDecoration: 'none'}} to = {`/tvshow/:${id}`}>
            <Card className='show-card'>
                {image ? 
                (<img src={image.medium} alt={name} />)
                : 
                (<div className="missing-img-div"><img src=""/><h1>no photo available</h1></div>)}
            </Card>
        </Link>
        </>
    )
}

export default ShowCard
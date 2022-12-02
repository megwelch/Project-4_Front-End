import React from "react";
import { Link } from 'react-router-dom'
import { Card }from 'react-bootstrap'

const ShowCard = ({ show: {image, name, id}}) => {
    return (
        <>
        <Link style={{textDecoration: 'none'}} to = {`/tvshow/${id}`}>
            <Card className='show-card shadow'>
                {image ? 
                (<img src={image.medium} alt={name} />)
                : 
                (<div className="missing-img-div text-center"><img src=""/><h1>{name}</h1><div>no photo available</div></div>)}
            </Card>
        </Link>
        </>
    )
}

export default ShowCard
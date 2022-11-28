import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card }from 'react-bootstrap'
import { favoritesIndex } from '../../api/tvshow'

const FavoritesIndex = (props) => {
    const {msgAlert, user} = props
    const [allFavorites, setAllFavorites] = useState([])

    useEffect(() => {
        favoritesIndex()
            .then(res=> {
                setAllFavorites(res.data.favorites)
            })
            .catch((error) => {
                msgAlert({
                    heading: "Failure",
                    message: "Failed to find favorites" + error,
                    variant: "danger"
                })
            })
    }, [])

    const allFavoritesJSX = allFavorites.map((tvShow, index) => {
        <Card className='show-card shadow'>
            {tvShow.image ? 
            (<img src={tvShow.image.medium} alt={tvShow.name} />)
            : 
            (<div className="missing-img-div text-center"><img src=""/><h1>{tvShow.name}</h1><div>no photo available</div></div>)}
        </Card>
    })

    return (
        <>
        {allFavoritesJSX}
        </>
    )
}

export default FavoritesIndex

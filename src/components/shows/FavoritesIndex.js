import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card }from 'react-bootstrap'
import { favoritesIndex } from '../../api/tvshow'
import { useParams } from 'react-router-dom'
import FavoriteTvShow from './FavoriteTvShow'

const FavoritesIndex = (props) => {
    const {msgAlert, user, favorites} = props
    const [allFavorites, setAllFavorites] = useState([])
    const { id } = useParams()

    useEffect(() => {
        favoritesIndex(user)
            .then(res=> {
                console.log(res)
                setAllFavorites(res.data.tvShow)
                console.log('res.data.tvShow', res.data.tvShow)
            })
            .catch((error) => {
                msgAlert({
                    heading: "Failure",
                    message: "Failed to find favorites" + error,
                    variant: "danger"
                })
            })
    }, [])

    let allFavoritesJSX =  null
    if (allFavorites) {
        allFavoritesJSX = allFavorites.map((tvShow) => {
            console.log(tvShow)
            return (
                <Card className='shadow favorite-show-card'>
                    <div>{tvShow.title}</div>
                    {tvShow.image ? 
                    (<img src={tvShow.image} alt={tvShow.name} />)
                    : 
                    (<div className="missing-img-div text-center"><img src=""/><h1>{tvShow.name}</h1><div>no photo available</div></div>)}
                </Card>
            )
        })
    }

    return (
        <>
        <h1 className='text-center mt-4'>Favorite Shows</h1>
        <div className='favorite-shows'>{allFavoritesJSX}</div>
        </>
    )
}

export default FavoritesIndex

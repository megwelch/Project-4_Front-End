import React, { useState } from 'react'
import { favoriteTvShow } from '../../api/tvshow'

export const FavoriteTvShow = ({ show, user }) => {
    console.log('show', show)
    const [favorite, setFavorite] = useState(
        {
            title: show.name,
            image: show.image.medium,
            rating: show.rating,
            description: show.summary,
        }
    )

    const handleClick = (e) => {
        favoriteTvShow (favorite, user)
    }

    return (
        <>
        <button onClick={handleClick}>Favorite</button>
        </>
    )
}

export default FavoriteTvShow
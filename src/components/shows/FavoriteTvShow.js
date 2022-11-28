import React, { useState } from 'react'
import { favoriteTvShow } from '../../api/tvshow'

export const FavoriteTvShow = ({ show, user }) => {
    const [favBtn, setFavBtn] = useState(false)
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
        setFavBtn()
    }

    return (
        <>
        <button onClick={handleClick}>Favorite</button>
        </>
    )
}

export default FavoriteTvShow
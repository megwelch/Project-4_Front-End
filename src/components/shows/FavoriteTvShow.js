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
            apiId: show.id,
        }
    )
    console.log('fav show', show)

    const handleClick = (e) => {
        favoriteTvShow (favorite, user)
        console.log('fav', favorite)
        setFavBtn(true)
    }

    return (
        <>
        <button className='favorite-btn' onClick={handleClick}>Favorite</button>
        </>
    )
}

export default FavoriteTvShow
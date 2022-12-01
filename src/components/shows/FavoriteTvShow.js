import React, { useState, useEffect } from 'react'
import { favoritesDelete, favoriteTvShow } from '../../api/tvshow'
import FavoritesIndex from './FavoritesIndex'
import { favoritesIndex } from '../../api/tvshow'
import { useParams } from 'react-router-dom'
import uuid from 'react-uuid';

export const FavoriteTvShow = ({ show, user }) => {
    const { id } = useParams()
    const [favBtn, setFavBtn] = useState(false)
    const [allFavorites, setAllFavorites] = useState({})
    const [favorite, setFavorite] = useState(
        {
            title: show.name,
            image: show.image.medium,
            rating: show.rating,
            description: show.summary,
            apiId: show.id,
        }
    )

    useEffect(() => {
        favoritesIndex(user)
            .then(res=> {
                setAllFavorites(res.data.tvShow)
            })
    }, [])
    
    const unFavorite = () => {
        favoritesDelete(user, id)
    }
        

    let tvShowArr = Array.from(allFavorites)
    // console.log(tvShowArr[0].title)

    console.log(tvShowArr)
    let tvShowSet = new Set()
    tvShowArr.forEach(tvshow => tvShowSet.add(tvshow))
    console.log('set', tvShowSet)
    console.log('value', tvShowSet.has({value:0}))
    
    let favorited = tvShowArr.some(tvshow => (tvshow.owner._id === user._id) && (tvshow.apiId == id))
    console.log(favorited)

    const handleClick = (e) => {
        favoriteTvShow (favorite, user)
        if (favorited) {
            setFavBtn(true)
        } else {
            setFavBtn(false)
        }
    }
    console.log('favorite', favorite)
    // console.log('favbtn',favBtn)

    // const favBtn = () => {
    //     if (allFavorites.some(tvshow => tvshow.name === user._id)){
    //         console.log('true')
    //     }
    // }

    // favBtn()
    // console.log('favorite', favorite.apiId)
    // console.log(user._id)

    return (
        <>
        {favBtn ? 
            <button className='favorite-btn' onClick={unFavorite}>Unfavorite</button>
         :
            <button className='favorite-btn' onClick={handleClick}>Favorite</button>
        }
        </>
    )
}

export default FavoriteTvShow
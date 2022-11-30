import React, { useState, useEffect } from 'react'
import { favoriteTvShow } from '../../api/tvshow'
import FavoritesIndex from './FavoritesIndex'
import { favoritesIndex } from '../../api/tvshow'
import { useParams } from 'react-router-dom'

export const FavoriteTvShow = ({ show, user }) => {
    const { id } = useParams()
    console.log('id', id)
    const [favBtn, setFavBtn] = useState(null)
    const [allFavorites, setAllFavorites] = useState({})
    const [owner, setOwner] = useState({})
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
                // setAllFavorites(res.data.tvShow)
                // console.log('res.data', res.data)
                setAllFavorites(res.data.tvShow)
            })
            // .catch((error))
    }, [])

    // console.log('ownerrrrr', owner)

    // allFavorites.map((tvShow) => {
    //         return 
    //             {tvShow.title}
    //     })
    // }

    console.log(allFavorites)
    let tvShowArr = Array.from(allFavorites)
    console.log('tvshowarr', tvShowArr)
    let ownerInArr = tvShowArr.some(tvshow => tvshow.owner._id === user._id)
    console.log(ownerInArr)
    console.log('apiId', favorite.apiId)
    let titleArr = []

    console.log(tvShowArr[1].title)

    for (let i=0; 1<tvShowArr; i++){
        if (tvShowArr[i].title = favorite.title)
        titleArr.push(tvShowArr[i])
    }

    console.log('titleArr', titleArr)

    const handleClick = (e) => {
        if((ownerInArr && (favorite.apiId == id))){
            console.log('hello')
            setFavBtn(false)
        } else {
            setFavBtn(true)
            favoriteTvShow (favorite, user)
        }
    }

    console.log('favbtn',favBtn)

    // const favBtn = () => {
    //     if (allFavorites.some(tvshow => tvshow.name === user._id)){
    //         console.log('true')
    //     }
    // }

    // favBtn()
    console.log('favorite', favorite.apiId)
    console.log(user._id)

    return (
        <>
        <button className='favorite-btn' onClick={handleClick}>Favorite</button>
        </>
    )
}

export default FavoriteTvShow
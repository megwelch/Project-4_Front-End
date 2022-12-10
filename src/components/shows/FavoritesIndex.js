import React, { useState, useEffect } from 'react'
import { Card }from 'react-bootstrap'
import { favoritesIndex } from '../../api/tvshow'
import { Link } from 'react-router-dom'
import { favoritesDelete } from '../../api/tvshow'


const FavoritesIndex = (props) => {
    const {msgAlert, user, favorites} = props
    const [allFavorites, setAllFavorites] = useState([])
    const [deleteFav, setDeleteFav] = useState(false)
    
    useEffect(() => {
        favoritesIndex(user)
            .then(res=> {
                setAllFavorites(res.data.tvShow)
            })
            .catch((error) => {
                msgAlert({
                    heading: "Failure",
                    message: "Failed to find favorites" + error,
                    variant: "danger"
                })
            })
    }, [deleteFav, favorites, msgAlert, user])

    const unFavorite = (id) => {
        favoritesDelete(user, id)
            .then(()=> {
                setDeleteFav((prevState) => {
                    return !prevState
            })

        })
      }

    let allFavoritesJSX =  null
    if (allFavorites) {
        allFavoritesJSX = allFavorites.map((tvShow) => {
            return (
                
                <Card className='shadow favorite-show-card' key={tvShow._id}>
                    <Link style={{textDecoration: 'none'}} to = {`/tvshow/${tvShow.apiId}`}>
                        {tvShow.image ? 
                        (<img className='fav-show-img'src={tvShow.image} alt={tvShow.name} />)
                        : 
                        (<div className="missing-img-div text-center"><img src="" alt='not available'/><h1>{tvShow.name}</h1><div>no photo available</div></div>)}
                    </Link>
                    <button className='unfavorite' onClick={()=>unFavorite(tvShow._id)}><i class="fas fa-thumbs-down"></i></button>
                </Card>
            )
        })
    }

    return (
        <>
        <style>{'body { background-color: rgba(139, 38, 206, .8)}'}</style>
        <div className='text-center mt-4 fav-shows-title'>Favorite Shows</div>
        <hr style={{height: '4px'}} className='line'></hr>
        <div className='favorite-shows'>{allFavoritesJSX}</div>
        </>
    )
}

export default FavoritesIndex
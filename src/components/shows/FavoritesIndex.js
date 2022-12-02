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
    }, [deleteFav])

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
                    <div>{tvShow.title}</div>
                    <Link style={{textDecoration: 'none'}} to = {`/tvshow/${tvShow.apiId}`}>
                        {tvShow.image ? 
                        (<img src={tvShow.image} alt={tvShow.name} />)
                        : 
                        (<div className="missing-img-div text-center"><img src=""/><h1>{tvShow.name}</h1><div>no photo available</div></div>)}
                    </Link>
                    <button onClick={()=>unFavorite(tvShow._id)}>Unfavorite</button>
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
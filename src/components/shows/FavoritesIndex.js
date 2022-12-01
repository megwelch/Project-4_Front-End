import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card }from 'react-bootstrap'
import { favoritesIndex } from '../../api/tvshow'
import { Link } from 'react-router-dom'
import { favoritesDelete } from '../../api/tvshow'


const FavoritesIndex = (props) => {
    const {msgAlert, user, favorites} = props
    const [allFavorites, setAllFavorites] = useState([])
    const [deleteFav, setDeleteFav] = useState(false)
    
    

    useEffect(() => {
        console.log('hi')
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
        // setDeleteFav(!deleteFav)
            .then(()=> {
                setDeleteFav((prevState) => {
                    return !prevState
            })

        })
      }
      console.log('favorites', allFavorites)

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
                    <button movieid='${tvShow._id}' onClick={()=>unFavorite(tvShow._id)}>Unfavourite</button>
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

// add favorites array to state at app level
// initialize empty
// pass set function to sign in
// on sign in run index favorites api call will be nested inside of existing promise chain
// set results in app level
// alternatively, make a use effect in app.js to run and set favorites index when user changes via user in dependency array
// handle update
// now that favorites array is at app level we can pass to children components
// add the favorites array to the show index as props
// descruture it to state and contitionally render card components based on if favorited or not
// in  show tvshow we want to know if specific show is favorited already (will come from index as prop)
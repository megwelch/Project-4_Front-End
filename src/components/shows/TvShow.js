import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import FavoriteTvShow from './FavoriteTvShow';
import ReviewIndex from '../reviews/ReviewIndex';

const TvShow = ({ user: user }) => {
    const { showId } = useParams()
    const sliceId = showId.slice(1, showId.length)
    const [show, setShow] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`https://api.tvmaze.com/shows/${sliceId}`)
            setShow(res.data)
            console.log('show', show)
        };
        fetchData();
    }, []);

    if (!show){
        return <div>Loading...</div>
    }

    let summary = show.summary.replace(/<\/?[^>]+>/gi, '')
    console.log(summary)

    return(
        <>
        <h1>{show.name}</h1>
        <img src={show.image.original} />
        <p>{summary}</p>
        <FavoriteTvShow show = {show} user= {user}></FavoriteTvShow>
        <ReviewIndex showId = {showId}></ReviewIndex>
        </>
    )
}

export default TvShow
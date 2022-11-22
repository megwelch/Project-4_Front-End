import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
// import { tvShowFavorite } from "../../api/tvshow";

const TvShow = () => {
    const { id } = useParams()
    const sliceId = id.slice(1, id.length)
    const [show, setShow] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`https://api.tvmaze.com/shows/${sliceId}`)
            setShow(res.data)
            console.log('show', show)
            // console.log('image', show.image.original)
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
        </>
    )
}

export default TvShow
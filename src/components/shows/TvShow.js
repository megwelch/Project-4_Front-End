import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
// import { tvShowFavorite } from "../../api/tvshow";

const TvShow = () => {
    const { id } = useParams()
    const [show, setShow] = useState([])

    useEffect(() => {
        console.log(id)
        const fetchData = async () => {
            console.log('id', id)
            const res = await axios(`https://api.tvmaze.com/shows/${id}`)
            console.log(res)
            setShow('show', res.data)
        };
        fetchData();
    }, []);

    return(
        <>
        Hi
        </>
    )
}

export default TvShow
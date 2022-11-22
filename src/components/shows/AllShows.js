import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCard from './ShowCard'

const AllShows = () => {
    const [title, setTitle] = useState({name: ''})
    const [shows, setShows] = useState([])
    // const [show, setShow] = useState([])

    const handleChange = (e) => {
        setTitle({ name: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.name.length > 0) {
            const fetchData = async () => {
                const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${title.name}`);
                let searchResults = []
                res.data.forEach((object) => {
                    searchResults.push(object.show)
                })
                setShows(searchResults);
            };
            fetchData();
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://api.tvmaze.com/shows`);
            setShows(res.data);
        };
        fetchData();
    }, []);

    // const getShow = async id => {
    //     const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    //     setShow(res.data);
    //   };   

    return(
        <>
        <form onSubmit={handleSubmit} className='form-container'>
            <input
                type = 'name'
                onChange = {handleChange}
                value = {title.name}
                className='input'
            >
            </input>
            <button type='submit' className='submit-button'>Search</button>
        </form>
            {shows.map(show => (
                <ShowCard key={show.id} show={show}/>
            ))}
        </>
    )
}

export default AllShows
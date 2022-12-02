import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCard from './ShowCard'

const AllShows = () => {
    const [title, setTitle] = useState({name: ''})
    const [shows, setShows] = useState([])

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

    return(
        <>
        <style>{'body { background-color: rgba(139, 38, 206, .8)}'}</style>
        <div class='top-container'>
            <div class='search-container'>
                <form onSubmit={handleSubmit} className='form'>
                    <input
                        type = 'name'
                        onChange = {handleChange}
                        value = {title.name}
                        className='input'
                        placeholder='Search for your favorite shows'
                    >
                    </input>
                    <button type='submit' className='submit-button search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div class='kermit-container'>
                <img id='kermit' src='https://i.imgur.com/6vNqFg8.png'></img>
            </div>
        </div>

        <div className='show-container'>
            {shows.map(show => (
                <ShowCard key={show.id} show={show}/>
            ))}
        </div>

        </>
    )
}

export default AllShows
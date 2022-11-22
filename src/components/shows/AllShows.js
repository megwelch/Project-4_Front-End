import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCard from './ShowCard'

const AllShows = () => {
    const [title, setTitle] = useState({name: ''})
    const [shows, setShows] = useState([])
    const [show, setShow] = useState([])

    const handleChange = (e) => {
        setTitle({ name: e.target.value})
        console.log(title.name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.name.length > 0) {
            const fetchData = async () => {
                const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${title.name}`);
                console.log('res', res)
                let searchResults = []
                res.data.forEach((object) => {
                    searchResults.push(object.show)
                })
                console.log('search results', searchResults)
                setShows(searchResults);
                console.log('searchresults', searchResults)
            };
            fetchData();
        }



        // if (title.name.length > 0) {
        // fetch(`https://api.tvmaze.com/search/shows?q=${title.name}`)
        //         .then((response) => {
        //             if (response.ok) {
        //                 console.log('response.ok', response.ok)
        //                 return response.json()
        //             } else {
        //                 console.log('response status', response.status)
        //                 throw new Error(response.status)
        //             }
        //         })
        //         .then((json) => {
        //             let searchResults = []
        //             json.forEach((object) => {
        //                 searchResults.push(object.show)
        //             })
        //             console.log('search results', searchResults)
        //             setShows(searchResults)
                    
        //         })
        //         .catch((error) => {
        //             console.error(error)
        //         })
        //     setTitle({name: ''})
        // console.log('click')
        // }
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://api.tvmaze.com/shows`);
            setShows(res.data);
        };
        fetchData();
    }, []);

        // const getShow = async id => {
        //     const res = await axios.get(`${BaseUrl}/shows/${id}`);
        //     setShow(res.data);
        // };


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
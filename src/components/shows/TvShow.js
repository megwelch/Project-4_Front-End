import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
import FavoriteTvShow from './FavoriteTvShow';
import ReviewIndex from '../reviews/ReviewIndex';

const TvShow = ({ user: user }) => {
    const { id } = useParams()
    const [show, setShow] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`https://api.tvmaze.com/shows/${id}`)
            setShow(res.data)
        };
        fetchData();
    }, []);

    if (!show){
        return <div>Loading...</div>
    }

    let summary = show.summary.replace(/<\/?[^>]+>/gi, '')

    return(
        <>
        <style>{'body { background-color: rgba(139, 38, 206, .8)}'}</style>
        <div className='show-page'>
            <section className='ind-show-container'>
            <div className='title mt-3'>
                {show.name}
                <FavoriteTvShow show = {show} user= {user}></FavoriteTvShow>
            </div>
                <div className='show-border d-flex flex-row p-4'>
                    <div><img className='ind-show-img'src={show.image.original}/></div>
                    <div className='ind-summary'>{summary}</div>
                </div>
            </section>
            <section className='show-review-section'>
                <div className='show-btns mt-5'>
                    
                    <Link to={`/reviews/${id}`}>Leave a review</Link>
                </div>
                <ReviewIndex showId={id} user={user}></ReviewIndex>
            </section>
        </div>
        </>
    )
}

export default TvShow
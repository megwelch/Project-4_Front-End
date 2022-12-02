import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { ThemeConsumer } from 'styled-components'
import { reviewCreate } from '../../api/review'
import axios from 'axios';
import { useLocation } from 'react-router-dom'

const ReviewCreate = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const { user, msgAlert } = props
    const { id } = location.state
    const [show, setShow] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`https://api.tvmaze.com/shows/${id}`)
            setShow(res.data)
        };
        fetchData();
    }, []);

    console.log(show)


    const defaultReview = {
        comment: '',
        apiId: parseInt(id),
    }

    const [review, setReview] = useState(defaultReview)

    const handleChange = (e) => {
        setReview(prevReview => {
            return({...prevReview, [e.target.name]: e.target.value})
        })
    }

    const createReview = (e) => {
        e.preventDefault()
        reviewCreate(review, user, id)
            .then(() => { navigate(`/tvshow/${id}`)})
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Review Failure' + error,
                    variant: 'danger'
                })
        })
    }

    if (!show){
        return <div>Loading...</div>
    }

    return(
        <>
        <style>{'body { background-color: rgba(139, 38, 206, .8)}'}</style>
        <div className='review-page'>
            <div style={{width: '40%'}}>
                <Card className='review-img-card'>
                    <img className='review-img'src={show.image.original} alt={show.name}/>
                </Card>
            </div>
            <div className='review-form-container'>
                <Form className='review-create-form' onSubmit={createReview}>
                    <Form.Label className='review-create-title'>Leave your review for {show.name}:</Form.Label>
                    <Form.Control 
                        as='textarea'
                        name='comment' 
                        value={review.comment} 
                        onChange={handleChange} 
                        rows= {5}
                    />
                    <button className='pull-right favorite-btn review-create-btn' type='submit'>Submit</button>
                </Form>
            </div>
        </div>

        </>
    )
}

export default ReviewCreate
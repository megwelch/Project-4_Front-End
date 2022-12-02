import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
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
    console.log('props id', id)

    // Getting TV Show
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`https://api.tvmaze.com/shows/${id}`)
            // setId(res.data.id)
        };
        fetchData();
    }, []);

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

    return(
        <>
        <style>{'body { background-color: rgba(139, 38, 206, .8)}'}</style>
        <Form className='review-create-form' onSubmit={createReview}>
            <Form.Label>Comment:</Form.Label>
            <Form.Control type='text' name='comment' value={review.comment} onChange={handleChange}/>
            <Button type='submit'>Submit</Button>
        </Form>
        </>
    )
}

export default ReviewCreate
import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { ThemeConsumer } from 'styled-components'
import { reviewCreate } from '../../api/review'
import ReviewForm from './ReviewForm'
import axios from 'axios';

const ReviewCreate = (props) => {
    const navigate = useNavigate()
    const { user, msgAlert } = props
    const [id, setId] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(`https://api.tvmaze.com/shows/${id}`)
            setId(res.data.id)
        };
        fetchData();
    }, []);
    console.log('id', id)

    const defaultReview = {
        comment: '',
        apiId: parseInt(id),
    }

    // console.log('sliceShowId', sliceShowId)

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
            {/* <Link
                to = {`/reviews/${id}`}
                onSubmit={createReview}
                handleChange={handleChange}
                createReview={createReview}
                review={review}
            ></Link> */}
        <Form onSubmit={createReview}>
            <Form.Label>Comment:</Form.Label>
            <Form.Control type='text' name='comment' value={review.comment} onChange={handleChange}/>
            <Button type='submit'>Submit</Button>
        </Form>
        </>
    )
}

export default ReviewCreate
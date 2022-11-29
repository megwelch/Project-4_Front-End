import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { ThemeConsumer } from 'styled-components'
import { reviewCreate } from '../../api/review'

const ReviewCreate = (props) => {
    const navigate = useNavigate()
    const { user, msgAlert } = props
    const defaultReview = {comment: ''}
    const { showId } = useParams()
    const sliceShowId = showId.slice(1, showId.length)
    console.log('id', showId)

    const [review, setReview] = useState(defaultReview)

    const handleChange = (e) => {
        setReview(prevReview => {
            return({...prevReview, [e.target.name]: e.target.value})
        })
    }

    const createReview = (e) => {
        e.preventDefault()
        reviewCreate(review, user, showId)
            .then(() => { navigate(`/tvshow/${sliceShowId}`)})
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
            <Form onSubmit={createReview}>
                <Form.Label>Comment:</Form.Label>
                <Form.Control type='text' name='comment' value={review.comment} onChange={handleChange}/>
                <Button type='submit'>Submit</Button>
            </Form>
            
        </>
    )
}

export default ReviewCreate
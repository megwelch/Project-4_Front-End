import React, {useState} from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { reviewUpdate } from '../../api/review'

const ReviewUpdate = (props) => {
    const {user, review, setUpdateReviews} = props

    const updateReview = (e) => {
        e.preventDefault()
        reviewUpdate(review, user, review._id)
            .then(() => {
                setUpdateReviews((prevState) => {
                    return !prevState
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Modal>
                <Form onSubmit={updateReview}>
                <Form.Label>Comment:</Form.Label>
                <Form.Control type='text' name='comment' value={review.comment}/>
                <Button type='submit'>Submit</Button>
                </Form>
            </Modal>
        </>
    )
}

export default ReviewUpdate
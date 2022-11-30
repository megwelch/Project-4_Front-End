import React, {useState} from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { reviewUpdate } from '../../api/review'

const ReviewUpdate = (props) => {
    const {user, review, setUpdateReviews, showModal, closeModal} = props
    const [editReview, setEditReview] = useState()

    const handleChange = (event) => {
        setEditReview({...review, [event.target.name]: event.target.value})
      }

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
            <Modal show={showModal}>
                <Form onSubmit={updateReview}>
                <Form.Label>Comment:</Form.Label>
                <Form.Control type='text' name='comment' value={review.comment} onChange={handleChange}/>
                <Button type='submit' onClick={closeModal}>Submit</Button>
                </Form>
            </Modal>
        </>
    )
}

export default ReviewUpdate
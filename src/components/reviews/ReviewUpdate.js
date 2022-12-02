import React, {useState} from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { reviewUpdate } from '../../api/review'

const ReviewUpdate = (props) => {
    const {user, review, setReview, setUpdateReviews, showModal, closeModal} = props
    const [editReview, setEditReview] = useState(review)

    const handleChange = (e) => {
        setEditReview(prevReview => {
            return({...prevReview, [e.target.name]: e.target.value})
        // setEditReview({...review, [e.target.name] : e.target.value})
        })
    }

    const updateReview = (e) => {
        e.preventDefault()
        console.log(editReview, user, review._id)
        reviewUpdate(editReview, user, review._id)
            .then(() => {
                setReview(editReview)
            })
            .then(() => {
                closeModal()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Modal className='modal-lg' show={showModal}>
                <Form onSubmit={updateReview}>
                    <Form.Label>Update your review:</Form.Label>
                    <Form.Control 
                    type='text' 
                    name='comment' 
                    value={editReview.comment} 
                    onChange={handleChange}
                    placeholder= {review.comment} />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Modal>
        </>
    )
}

export default ReviewUpdate

// triggerRefresh={() => setEditReview(prev => !prev)}
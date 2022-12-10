import React, {useState} from 'react'
import { Form, Modal } from 'react-bootstrap'
import { reviewUpdate } from '../../api/review'

const ReviewUpdate = (props) => {
    const {user, review, setReview, showModal, closeModal} = props
    const [editReview, setEditReview] = useState(review)

    const handleChange = (e) => {
        setEditReview(prevReview => {
            return({...prevReview, [e.target.name]: e.target.value})
        })
    }

    const updateReview = (e) => {
        e.preventDefault()
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
            <Modal className='modal' show={showModal}>
                <Form className='modal-form' onSubmit={updateReview}>
                    <Form.Label className='modal-title'>Update your review:</Form.Label>
                    <Form.Control 
                    className='modal-text-area'
                    as='textarea' 
                    name='comment' 
                    value={editReview.comment} 
                    onChange={handleChange}
                    placeholder= {review.comment}
                    rows= {4} />
                    <button className='pull-right update-btn favorite-btn' type='submit'>Submit</button>
                </Form>
            </Modal>
        </>
    )
}

export default ReviewUpdate

// triggerRefresh={() => setEditReview(prev => !prev)}
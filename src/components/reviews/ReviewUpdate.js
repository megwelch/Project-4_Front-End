import React, {useState} from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { reviewUpdate } from '../../api/review'

const ReviewUpdate = (props) => {
    const {user, review, setUpdateReviews, showModal, closeModal} = props
    const [editReview, setEditReview] = useState({})
    console.log('review._id', review._id)

    // useEffect(() => {
    //     setReview(currentCompany)
    //   },[currentCompany])

    const handleChange = (e) => {
        setEditReview(prevReview => {
            return({...prevReview, [e.target.name]: e.target.value})
        // setEditReview({...review, [e.target.name] : e.target.value})
        })
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
                    <Form.Control type='text' name='comment' value={editReview.comment} onChange={handleChange} />
                    <Button type='submit' onClick={closeModal}>Submit</Button>
                </Form>
            </Modal>
        </>
    )
}

export default ReviewUpdate

// triggerRefresh={() => setEditReview(prev => !prev)}
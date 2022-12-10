import React, { useState } from "react";
import { reviewDelete } from "../../api/review"
import ReviewUpdate from "./ReviewUpdate";

const ReviewCard = (props) => {
    const {user, setUpdateReviews} = props
    const [showModal, setShowModal] = useState(false)
    const [review, setReview] = useState(props.review)

    const deleteReview = () => {
        reviewDelete(user, review._id)
            .then(() => {
                setUpdateReviews((prevState) => {
                    return !prevState
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const openModal = () => {setShowModal(true)}
    const closeModal = () => {setShowModal(false)}

    return (
        <>
            <div className='review-container'>
                <div className='review' key={review._id} >
                    <div className='review-owner-container'>
                        <div>Review by:</div>
                        <div>{user.email}</div>
                    </div>
                    <div className='comment'>{review.comment}</div>
                    {user  && (user._id === review.owner)?
                        <div className='pull-right review-btn-container'>
                            <button className='edit-delete-btn m-2' onClick={deleteReview}>delete</button>
                            <button className='edit-delete-btn' onClick={openModal}>edit</button>
                        </div>
                    : null}
                </div>
            </div>
            <ReviewUpdate review={review} user={user} setUpdateReviews={setUpdateReviews} showModal={showModal} closeModal={closeModal} setReview={setReview}/>
        </>
    )
}

export default ReviewCard
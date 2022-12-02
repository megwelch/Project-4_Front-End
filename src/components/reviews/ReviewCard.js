import React, { useState } from "react";
import uuid from 'react-uuid';
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
            <div className='review' key={review._id} >
                <div>{review.owner}</div>
                <div>{review.comment}</div>
                {user  && (user._id === review.owner)?
                    <div>
                        <button onClick={deleteReview}>delete</button>
                        <button onClick={openModal}>edit</button>
                    </div>
                : null}
            </div>
            <ReviewUpdate review={review} user={user} setUpdateReviews={setUpdateReviews} showModal={showModal} closeModal={closeModal} setReview={setReview}/>
        </>
    )
}

export default ReviewCard
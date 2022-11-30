import React, { useState } from "react";
import uuid from 'react-uuid';
import { reviewDelete } from "../../api/review"
import ReviewUpdate from "./ReviewUpdate";

const ReviewCard = (props) => {
    const [review, setReview] = useState(props.review)
    const {user, setUpdateReviews} = props

    const deleteReview = () => {

        console.log('user', user)
        console.log('props', props)
        reviewDelete(user, review._id)
            .then(() => {
                setUpdateReviews((prevState) => {
                    return !prevState
                })
            })
            .catch((error) => {
                console.log(error)
            })
        // console.log('review in delete review card', review)
    }

    return (
        <>
            <div className='review' key={uuid()} >
                <div>{review.owner}</div>
                <div>{review.comment}</div>
                <button onClick={deleteReview}>X</button>
                <button >O</button>
            </div>
            <ReviewUpdate review={review} user={user} setUpdateReviews={setUpdateReviews}/>
        </>
    )
}

export default ReviewCard

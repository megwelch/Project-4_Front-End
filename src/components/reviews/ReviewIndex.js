import { useEffect, useState } from "react"
// import uuid from 'react-uuid';
import { reviewIndex } from "../../api/review"
import { reviewDelete } from "../../api/review"
import { reviewUpdate } from "../../api/review"
import ReviewCard from "./ReviewCard";



const ReviewIndex = (props) => {
    const {msgAlert, showId, user} = props
    const[reviews, setReviews] = useState([])
    const [updateReviews, setUpdateReviews] = useState(false)

    useEffect(() => {
        reviewIndex(showId)
            .then(res => {
                setReviews(res.data.reviews)
            })
            .catch((error) => {
                msgAlert({
                    heading: "Failure",
                    message: "Failed to find reviews" + error,
                    variant: "danger"
                })
            })
    },[updateReviews])

    let reviewDisplay = null
    if (reviews)  {
        reviewDisplay = reviews.map(review => {
            return(
                <ReviewCard key={review.id} review={review} user={user} setUpdateReviews = {setUpdateReviews}/>
            )
        })
    }
    return(
        <>
        <div>{reviewDisplay}</div>
        </>
    )
}

export default ReviewIndex
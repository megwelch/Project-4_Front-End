import { useEffect, useState } from "react"
// import uuid from 'react-uuid';
import { reviewIndex } from "../../api/review"
import { reviewDelete } from "../../api/review"
import { reviewUpdate } from "../../api/review"
import ReviewCard from "./ReviewCard";



const ReviewIndex = (props) => {
    const {msgAlert, showId, user} = props
    console.log('showid', showId)
    const[reviews, setReviews] = useState([])
    const [updateReviews, setUpdateReviews] = useState(false)

    useEffect(() => {
        reviewIndex(showId)
            .then(res => {
                console.log('here')
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


    // const deleteReview = (e) => {
    //     e.preventDefault()
    //     console.log('inside delete review the event target is',e.target)
    //     // reviewDelete(user, showId)
    // }

    // const updateReview = () => {
    //     reviewUpdate(data, user, showId)
    // }

    

    let reviewDisplay = null
    if (reviews)  {
        reviewDisplay = reviews.map(review => {
            return(
                // <form className='review' key={uuid()} onSubmit={deleteReview} data-id={review.id}>
                //     <div>{review.owner}</div>
                //     <div>{review.comment}</div>
                //     <button type='submit'>X</button>
                // </form>
                <ReviewCard review={review} user={user} setUpdateReviews = {setUpdateReviews}/>
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
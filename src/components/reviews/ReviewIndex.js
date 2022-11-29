import { useEffect, useState } from "react"
import { reviewIndex } from "../../api/review"

const ReviewIndex = (props) => {
    const {msgAlert, showId} = props
    console.log('showid', showId)
    const[reviews, setReviews] = useState([])

    useEffect(() => {
        reviewIndex(showId)
            .then(res=> {
                setReviews('res.data.reviews', res.data.reviews)
            })
            // .catch((error) => {
            //     msgAlert({
            //         heading: "Failure",
            //         message: "Failed to find reviews" + error,
            //         variant: "danger"
            //     })
            // })
    },[showId, msgAlert])

    console.log('reviews', reviews)

    let reviewDisplay = null
    if (reviews)  {
        reviewDisplay = reviews.map(review => {
            return(
                <>
                <div>{review.owner}</div>
                <div>{review.comment}</div>
                </>
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
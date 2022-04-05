import React from 'react';
import useReviews from '../../hooks/useReviews';
import Card3 from '../Card3/Card3';
import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h3 className='review-title'>Our Regular Client's Valuable Feedbacks !</h3>
            <div class="card-group2">
                {
                    reviews.map(review => <Card3
                        key={review.id}
                        review={review}
                    ></Card3>)
                }
            </div>
        </div>
    );
};

export default Review;
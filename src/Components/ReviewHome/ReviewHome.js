import React from 'react';
import useReviews from '../../hooks/useReviews';
import Card2 from '../Card2/Card2';
import './ReviewHome.css';
const ReviewHome = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div class="card-group">
                {
                    reviews.slice(0,3).map(review => <Card2
                        key={review.id}
                        review={review}
                    ></Card2>)
                }
        </div>

    );
};

export default ReviewHome;
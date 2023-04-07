import { getReview } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsContainer, ReviewsHeading, ReviewItem } from 'styles/Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const requestFunc = async () => {
      const response = await getReview(movieId);
      setReviews(response.data.results);
    };
    requestFunc();
  }, [movieId]);
  return (
    <ReviewsContainer>
      <ReviewsHeading>Reviews</ReviewsHeading>
      {reviews.map((review) => (
        <ReviewItem key={review.id}>{review.content}</ReviewItem>
      ))}
    </ReviewsContainer>
  );
};

export default Reviews;

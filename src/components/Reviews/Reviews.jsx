import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'movieAPI';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getmovieReviewsID = async () => {
      const getmovieReviews = await fetchMovieReviews(movieId);

      setReviews(getmovieReviews);
    };

    getmovieReviewsID();
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};

export default Reviews;

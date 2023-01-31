import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'movieAPI';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getmovieReviewsID = async () => {
      const getmovieReviews = await fetchMovieReviews(movieId);
      console.log('getmovieReviews', getmovieReviews);
      setReviews(getmovieReviews);
    };

    getmovieReviewsID();
  }, [movieId]);

  return (
    <>
      <p>Reviews</p>
      {reviews.map(review => (
        <>
          <h4>Author {review.author}</h4>
          <p>{review.content}</p>
        </>
      ))}
    </>
  );
};

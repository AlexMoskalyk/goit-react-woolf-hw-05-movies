import { fetchMoreInfoByMovieId } from 'api/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const getReviewsById = async () => {
      try {
        const data = await fetchMoreInfoByMovieId(movieId, 'reviews');
        setReviews(data);
      } catch (error) {
        alert(error.message);
      }
    };
    movieId && getReviewsById();
  }, [movieId]);

  return reviews ? (
    <div>
      <ul>
        {reviews.results.map(item => (
          <li key={item.id}>
            <p>Author: {item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>No Reviews</div>
  );
};

export default Reviews;

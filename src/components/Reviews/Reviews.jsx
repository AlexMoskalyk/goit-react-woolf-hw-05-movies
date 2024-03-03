import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Reviews = () => {
  const { reviews } = useOutletContext();
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

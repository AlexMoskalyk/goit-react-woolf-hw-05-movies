import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Cast = () => {
  const { casts } = useOutletContext();

  return casts ? (
    <div>
      <h3>Cast</h3>
      <ul>
        {casts?.cast.map(item => (
          <li key={item.credit_id}>
            <p>Character:{item.character}</p>
            <p>Real name:{item.name}</p>
          </li>
        ))}
      </ul>
      <h3>Crew</h3>
      <ul>
        {casts?.crew.map(item => (
          <li key={item.credit_id}>
            <p>Real name:{item.name}</p>
            <p>Job:{item.job}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>No Information</p>
  );
};

export default Cast;

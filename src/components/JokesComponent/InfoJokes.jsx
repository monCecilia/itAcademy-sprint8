import React from 'react';

const InfoJokes = (props) => {
  const {repos} = props;
  if (!repos|| repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <h3>Jokes: {repos.joke}</h3>
  );
};
export default InfoJokes;
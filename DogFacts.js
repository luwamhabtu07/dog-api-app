import React from 'react';
import { useQuery } from '@tanstack/react-query';

function DogFacts() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['dogFacts'],
    queryFn: async () => {
      const res = await fetch('https://dogapi.dog/api/v2/facts');
      if (!res.ok) throw new Error('Failed to fetch dog facts');
      return res.json();
    },
  });

  if (isPending) return <p>Loading facts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Dog Facts</h2>
      <ul>
        {data.data.map((fact) => (
          <li key={fact.id}>{fact.attributes.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogFacts;

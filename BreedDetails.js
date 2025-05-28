import React from 'react';
import { useQuery } from '@tanstack/react-query';

function BreedDetails({ breedId }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['breed', breedId],
    queryFn: async () => {
      const res = await fetch(`https://dogapi.dog/api/v2/breeds/${breedId}`);
      if (!res.ok) throw new Error('Failed to fetch breed details');
      return res.json();
    },
    enabled: !!breedId,
  });

  if (isPending) return <p>Loading details...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const breed = data.data.attributes;

  return (
    <div>
      <h3>Details for: {breed.name}</h3>
      <p><strong>Breed Group:</strong> {breed.breed_group}</p>
      <p><strong>Life Span:</strong> {breed.life_span}</p>
      <p><strong>Description:</strong> {breed.description}</p>
    </div>
  );
}

export default BreedDetails;

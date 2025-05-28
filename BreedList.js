import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BreedDetails from './BreedDetails';

function BreedList() {
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['breeds'],
    queryFn: async () => {
      const res = await fetch('https://dogapi.dog/api/v2/breeds');
      if (!res.ok) throw new Error('Failed to fetch breeds');
      return res.json();
    },
  });

  if (isPending) return <p>Loading breeds...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Breed List</h2>
      <ul>
        {data.data.map((breed) => (
          <li key={breed.id} onClick={() => setSelectedBreedId(breed.id)}>
            {breed.attributes.name}
          </li>
        ))}
      </ul>
      {selectedBreedId && <BreedDetails breedId={selectedBreedId} />}
    </div>
  );
}

export default BreedList;

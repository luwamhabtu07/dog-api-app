import React from 'react';
import { useQuery } from '@tanstack/react-query';

function DogGroups() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['dogGroups'],
    queryFn: async () => {
      const res = await fetch('https://dogapi.dog/api/v2/groups');
      if (!res.ok) throw new Error('Failed to fetch dog groups');
      return res.json();
    },
  });

  if (isPending) return <p>Loading groups...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Dog Groups</h2>
      <ul>
        {data.data.map((group) => (
          <li key={group.id}>{group.attributes.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogGroups;

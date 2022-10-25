const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) { // for debugging
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json(); // returns a promise
};

export default fetchPet; // method for React Query - easier to test
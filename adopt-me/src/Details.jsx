import { useParams } from "react-router-dom";
// comes from BrowserRouter - Context is like props but from Router
import { useQuery } from '@tanstack/react-query'; 
// post would be useMutation
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet) 
  // use this query that exists already - if you don't have it, use fetchPet
  // can't await these render fns
  
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐾</h2>
      </div>
    )
  }

  const pet = results.data.pets[0];
  
  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>   
        <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state}</h2>   
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  )
}
export default Details;
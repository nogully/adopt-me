import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
// this is the outdated part FYI now that we have React Query
// import {useState, useEffect} from 'react';
// // custom hooks are just other hooks packaged together
// // we're taking complexity out of SearchParams
// // some people make custom hooks for everything

// const localCache = {};

// export default function useBreedList(animal){
//   const [breedList, setBreedList] = useState([]);
//   const [status, setStatus] = useState("unloaded");
//   // use setStatus to be able to test 
  
//   // use as few effects as possible for long term maintenance/testability
//   useEffect(() => {
//     if (!animal) {
//       setBreedList([]);
//     } else if (localCache[animal]) {
//       setBreedList(localCache[animal]);
//     } else {
//       requestBreedList();
//     }

//     // react likes for the fns to be inside useEffect
//     async function requestBreedList() {
//       setBreedList([]);
//       setStatus("loading");

//       const res = await fetch(
//         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//       )
//       const json = await res.json();
//       localCache[animal] = json.breeds || [];
//       setBreedList(localCache[animal]);
//       setStatus("loaded");
//     }
//   }, [animal])

//   return [breedList, status];
// };

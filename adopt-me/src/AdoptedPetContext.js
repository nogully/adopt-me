import { createContext } from 'react';

// Context is like state, but instead of being confined to a component, 
// it's global to your application
// lightweight Context vs Redux which is more elaborate
const AdoptedPetContext = createContext();

export default AdoptedPetContext;
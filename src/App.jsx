import { useState } from 'react'
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';

import './App.css'


function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const ships = await getAllStarships();
      setStarships(ships);
    }
    fetchStarships();
  }, []);

  return (
    <div className="App">
      <h1>Star Wars Starships</h1>
      <div className="starship-container">
        {starships.map((ship, index) => (
          <StarshipCard key={index} name={ship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;

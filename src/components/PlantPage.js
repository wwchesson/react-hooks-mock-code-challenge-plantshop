import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const plantsToDisplay = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])
  
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }
  
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search onSearch={setSearchTerm} searchTerm={searchTerm}/>
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;

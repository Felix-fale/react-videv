import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm"; // ctrl + espace pour faire une importation automatique

function App() {
  // State (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  // comportements
  const handleDelete = (id) => {
    // 1.copie du state
    const fruitsCopy = [...fruits];

    // 2.Manipuler le state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    // 3.Modifier le state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAAjouter) => {
    // 1 copie du state
    const fruitsCopy = [...fruits];
    // 2 manipulation sur le copie du state
    fruitsCopy.push(fruitAAjouter);
    // 3 modifier le state avec le setter
    setFruits(fruitsCopy);
  };

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            actionClick={() => handleDelete(fruit.id)}
            key={fruit.id}
          ></Fruit>
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd}></FruitForm>
    </div>
  );
}

export default App;

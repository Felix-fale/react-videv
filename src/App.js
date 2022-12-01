import { useState } from "react";

function App() {
  // State (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

  // comportements
  const handleDelete = (id) => {
    console.log(id);
    // 1.copie du state
    const fruitsCopy = [...fruits];

    // 2.Manipuler le state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    // 3.Modifier le state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 1 copie du state
    const fruitsCopy = [...fruits];
    // 2 manipulation sur le copie du state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    fruitsCopy.push({ id, nom });
    // 3 modifier le state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}{" "}
            <button onClick={() => handleDelete(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit..."
          onChange={handleChange}
        />
        <button>Ajouter + 58m30s</button>
      </form>
    </div>
  );
}

export default App;

export default function Fruit(props) {
  // state
//   const fruitInfo = props.fruitInfo;
//   const onFruitDelete = props.onFruitDelete;
  const { fruitInfo, onFruitDelete} = props

  // comportements

  // affichage
  return (
    <li>
      {fruitInfo.nom}{" "}
      <button onClick={() => onFruitDelete(props.fruitInfo.id)}>X</button>
    </li>
  );
}

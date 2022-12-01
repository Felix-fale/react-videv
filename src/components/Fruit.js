export default function Fruit(props) {
  // state
  //   const fruitInfo = props.fruitInfo;
  //   const onFruitDelete = props.onFruitDelete;
  const { fruitInfo, actionClick } = props;

  // comportements

  
  // affichage
  return (
    <li>
      {fruitInfo.nom} <button onClick={actionClick}>X</button>
    </li>
  );
}

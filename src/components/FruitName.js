import { Fruits } from '../data'

function FruitName() {
    const FruitList = Fruits.map((Fruits) =>
      <div>{Fruits.fruitName}</div>
    )

  return (
    <div>
        <h1>Buah Yang dimiliki Andi</h1>
        <ul>
            <p>{FruitList}</p>
        </ul>
    </div>
    
  );
}

export default FruitName

import { Fruits } from '../data'

function FruitStock() {
    const FruitList = Fruits.map((Fruits) =>
        <div>
            {Fruits.stock}
        </div>
    )

    return (
        <div>
            <h1>Jumblah Stock</h1>
            <ul>
                <p>{FruitList }</p>
            </ul>
        </div>
    )
}

export default FruitStock
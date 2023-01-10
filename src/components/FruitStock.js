import { Fruits } from '../data'

function FruitStock() {
    const FruitList = Fruits.map((Fruits =>
        <div>{Fruits.stock}</div>
    ));
    const Total = (FruitList.reduce((total, currentItem) =>
        total = total + currentItem.FruitStock, 0)
    );

    return (
        <div>
            <h1>Jumblah Stock</h1>
            <ul>
                <p>{FruitList}</p>
                <strong>Total</strong>{' '}: {Total}
            </ul>
        </div>
    )
}

export default FruitStock
import { Fruits } from '../data'

function FruitType() {
    const FruitList = Fruits.map((Fruits) =>
        <div key={Fruits.id}>
            {Fruits.fruitType}
        </div>
    )

    return (
        <div>
            <h1>Berdasarkan Type Buah </h1>
            <ul><strong>Buah IMPORT</strong>
                <p>
                    {FruitList ? 'IMPORT' : 'LOCAL'} :
                </p>
            </ul>
            <ul><strong>Buah LOCAL</strong>
                <p>
                    {FruitList ? 'LOCAL' : 'IMPORT'} : 
                </p>
            </ul>
        </div>
    )
}

export default FruitType
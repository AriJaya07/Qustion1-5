import { Fruits } from '../data'

function FruitType() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
            <ul><strong>IMPORT : </strong></ul>
                {Fruits.filter(jenis => jenis.fruitType = 'IMPORT').map(filteredType => (
            <ul>
                {filteredType.fruitName}  
            </ul>
        ))}
        </div>

        <div style={{ display: 'flex' }}>
            <ul><strong>LOCAL : </strong></ul>
                {Fruits.filter(jenis => jenis.fruitType = 'LOCAL').map(filteredType => (
            <ul>
                {filteredType.fruitName}
            </ul>
        ))}
        </div>
      </div>
    );
  }

export default FruitType
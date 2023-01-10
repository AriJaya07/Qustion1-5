import './App.css';
import FruitName from './components/FruitName'
import FruitType from './components/FruitType'
import FruitStock from './components/FruitStock'
import Komentar from './components/Komentar'
import IComment from './components/Comments'


function App() {
  return (
    <div style = {{ padding: '50px'}}>
      <FruitName />
      <div> 
        <h1>Jenis Buah</h1>
        <span style={{ display: 'flex' }}>
          <FruitType />
        </span>
      </div>
      <FruitStock />
      <Komentar />
      <IComment />
    </div>
  );
}

export default App;

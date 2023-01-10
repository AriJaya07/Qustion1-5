import './App.css';
import FruitName from './components/FruitName'
import FruitType from './components/FruitType'
import FruitStock from './components/FruitStock'
import Komentar from './components/Komentar'
import IComment from './components/Comments'


function App() {
  return (
    <div>
      <FruitName />
      <FruitType />
      <FruitStock />
      <Komentar />
      <IComment />
    </div>
  );
}

export default App;

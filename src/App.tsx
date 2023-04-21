import './App.css';
import Bottle from './features/bottle';
import Box from './features/box';
import Counter from './features/counter/Counter';
import Mirror from './features/mirror';
import Spinner from './features/spinner';
import TextMessage from './features/textMessage';

function App() {
  return (
    <div className="App">
      <Counter />
      <Spinner />
      <Box />
      <Mirror />
      <TextMessage />
      <Bottle />
    </div>
  );
}

export default App;

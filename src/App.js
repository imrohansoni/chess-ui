import './App.css';
import King from './pieces/king';
import Knight from './pieces/knight';
import Board from './board';

function App() {
  return (
    <div className='App'>
      <Board />
      {/* <Knight
        theme={{
          primary: '#FFFFFF',
          secondary: '#CCCCCC',
          shadow: '#EBEBEB',
        }}
      /> */}
    </div>
  );
}

export default App;

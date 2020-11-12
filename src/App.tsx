import React from 'react';
import { GameBlock } from './components/GameBlock/GameBlock';
import { Result } from './components/ResultBlock/Result';


function App() {
  return (
    <div className="game">
        <GameBlock />
        <Result />
    </div>
  );
}

export default App;

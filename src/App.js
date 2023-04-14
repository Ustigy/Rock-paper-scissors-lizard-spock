import { useEffect, useState } from 'react';

import './App.css';

import Header from './components/header';
import Main from './components/main';
import Rules from './components/rules';
import Game from './components/game';


function App() {
      const [generalState, setGeneralState] = useState('main');
      useEffect(() => console.log(generalState))

      const [chosenSignState, setChosenSignState] = useState(null);
      // useEffect(() => console.log(chosenSignState))


      if (generalState === 'main') {
            return (
                  <>
                        <div className='container'>
                              <Header />
                              <Main setGeneralState = {setGeneralState} setChosenSignState = {setChosenSignState} />
                        </div>
            
                        <div className='rules-container'>
                              <Rules />
                        </div>
                  </>
            )
      } else if (generalState === 'game') {
            return (
                  <>
                        <div className='container'>
                              <Header />
                              <Game chosenSignState = {chosenSignState} />
                        </div>
            
                        <div className='rules-container'>
                              <Rules />
                        </div>
                  </>
            )

      }


}

export default App;

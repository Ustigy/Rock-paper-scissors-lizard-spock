import { useState } from 'react';

import './App.css';

import Header from './components/header';
import Main from './components/main';
import Rules from './components/rules';


function App() {
      const [generalState, setGeneralState] = useState('main');

      if (generalState === 'main') {
            return (
                  <>
                  <div className='container'>
                        <Header />
                        <Main setGeneralState = {setGeneralState} />
                  </div>
      
                  <div className='rules-container'>
                        <Rules />
                  </div>
            </>
            )
      }


}

export default App;

import { useEffect, useState } from 'react';

import './App.css';

import Header from './components/header';
import Main from './components/main';
import Rules from './components/rules';
import Game from './components/game';

import scissors from './img/icon-scissors.svg';
import spock from './img/icon-spock.svg';
import paper from './img/icon-paper.svg';
import lizard from './img/icon-lizard.svg';
import rock from './img/icon-rock.svg';

let arraySigns = {
      scissors: {
            className: 'scissors',
            id: 0,
            backgroundColor: 'hsl(39, 89%, 49%)',
            boxShadow: '0 5px 0 hsla(40, 84%, 53%, 0.493)',
            img: {scissors},
            gridArea: 'scissors',
            // generalState = {props.generalState}
            // setGeneralState = {props.setGeneralState}
            // chosenSignState = {props.chosenSignState}
            // setChosenSignState = {props.setChosenSignState}
      },

      spock: {
            className: 'spock',
            id: 4,
            backgroundColor: 'hsl(189, 58%, 57%)' ,
            boxShadow: '0 5px 0 hsl(190, 58%, 57%, 0.493)',
            img: {spock},
            gridArea: 'spock',
      },

      paper: {
            className: 'paper',
            id: 1,
            backgroundColor: 'hsl(230, 89%, 65%)',
            boxShadow: '0 5px 0 hsl(231, 89%, 65%, 0.493)',
            img: {paper},
            gridArea: 'paper',
      },

      lizard: {
            className: 'lizard',
            id: 3,
            backgroundColor: 'hsl(261, 72%, 63%)',
            boxShadow: '0 5px 0 hsl(262, 72%, 63%, 0.493)',
            img: {lizard},
            gridArea: 'lizard',
      },
      
      rock: {
            className: 'rock',
            id: 2,
            backgroundColor: 'hsl(349, 70%, 56%)',
            boxShadow: '0 5px 0 hsl(349, 70%, 56%, 0.493)',
            img: {rock},
            gridArea: 'rock',
      },
};


function App() {

      const [generalState, setGeneralState] = useState('main');
      // useEffect(() => console.log(generalState))

      const [chosenSignState, setChosenSignState] = useState(null);
      // useEffect(() => console.log(chosenSignState))

      // const [computerSignState, setComputerSignState] = useState(null);
      // useEffect(() => console.log(computerSignState))

      const [generalScore, setScoreState] = useState(0);


      let chosenComputer;
      function computerTurn() {
            let arrNames = [];
            for (let key in arraySigns) {
                  arrNames.push(key);
            }
            let rand = Math.floor(Math.random() * arrNames.length);
            // console.log(arraySigns[arrNames[rand]])
            chosenComputer = arraySigns[arrNames[rand]];
      }
      computerTurn();


      if (generalState === 'main') {
            return (
                  <>
                        <div className='container'>
                              <Header 
                              generalScore = {generalScore}
                              />
                              <Main 
                              arraySigns = {arraySigns}

                              generalState = {generalState}
                              setGeneralState = {setGeneralState}
                              chosenSignState = {chosenSignState}
                              setChosenSignState = {setChosenSignState}

                              // computerSignState = {computerSignState}
                              // setComputerSignState = {setComputerSignState}
                              />
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
                              <Header
                              generalScore = {generalScore}
                              />
                              {/* <Game chosenSignState = {chosenSignState} /> */}
                              <Game 
                              generalState = {generalState}
                              setGeneralState = {setGeneralState}
                              chosenSignState = {chosenSignState}
                              setChosenSignState = {setChosenSignState}

                              chosenComputer = {chosenComputer}

                              generalScore = {generalScore}
                              setScoreState = {setScoreState}
                              />
                        </div>
            
                        <div className='rules-container'>
                              <Rules />
                        </div>
                  </>
            )

      }


}

export default App;

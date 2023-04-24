import { useEffect, useState } from "react";
import Sign from "./sign";

let resault;
let resaultMessage;

function selectWinner(props) {
    let playerID = props.chosenSignState.arraySign.id;
    let computerID = props.chosenComputer.id;

    switch(playerID - computerID) {
        case -3:
        case -1:
        case 2:
        case 4:
            resault = 'win';
            resaultMessage = 'YOU WIN';
            props.increment();
            // props.setScoreState(props.generalScore + 1);

            // console.log(resault);
            break;

        case -4:
        case -2:
        case 3:
        case 1:
            resault = 'lose';
            resaultMessage = 'YOU LOSE';
            props.decrement();   

            // props.setScoreState(props.generalScore - 1);

            // console.log(resault);
            break;
        
        default:
            resault = 'draw';
            resaultMessage = 'DRAW';

            // props.setScoreState(props.generalScore + 0);

            // console.log('DRAW');
            break;
    }
}

function handlerNewGame(props) {
    props.setGeneralState('main');
}


function Game(props) {

    selectWinner(props);

    return (
        <div className="game">
            <Sign
                name = 'chosen'
                generalState = {props.generalState}
                setGeneralState = {props.setGeneralState}
                chosenSignState = {props.chosenSignState}
                setChosenSignState = {props.setChosenSignState}

                resault = {resault}
            />

            <Sign
                name = 'computer'
                generalState = {props.generalState}
                setGeneralState = {props.setGeneralState}
                chosenSignState = {props.chosenSignState}
                setChosenSignState = {props.setChosenSignState}

                chosenComputer = {props.chosenComputer}

                resault = {resault}
            />

            <div className="result-container">
                <p>{resaultMessage}</p>
                <button onClick={() => handlerNewGame(props)}>PLAY AGAIN</button>
            </div>

        </div>
    )
}

export default Game;
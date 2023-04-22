import { useState } from "react";
import Sign from "./sign";

let resault;
let resaultMessage;

function selectWinner(props) {
    // console.log(props.chosenSignState.arraySign.id);
    // console.log(props.chosenComputer.id);

    let playerID = props.chosenSignState.arraySign.id;
    let computerID = props.chosenComputer.id;
    // console.log(playerID - computerID)
    switch(playerID - computerID) {
        case -3:
        case -1:
        case 2:
        case 4:
            resault = 'win';
            resaultMessage = 'YOU WIN';
            props.setScoreState(props.generalScore + 1);

            // console.log(props.generalScore)
            // console.log('Win');
            break;

        case -4:
        case -2:
        case 3:
        case 1:
            resault = 'lose';
            resaultMessage = 'YOU LOSE';
            props.setScoreState(props.generalScore - 1);

            // console.log('Lose');
            break;
        
        default:
            resault = 'draw';
            resaultMessage = 'DRAW';
            // props.setScoreState(props.generalScore)

            // console.log('DRAW');
            break;
    }
}

function handlerNewGame(props) {
    props.setGeneralState('main');
}


function Game(props) {
    // console.log(props.chosenSignState)

    selectWinner(props);

    // const [winnerState, setWinnerState] = useState({resaultMessage});
    // console.log(resault)

    return (
        <div className="game">
            <Sign
            name = 'chosen'
            generalState = {props.generalState}
            setGeneralState = {props.setGeneralState}
            chosenSignState = {props.chosenSignState}
            setChosenSignState = {props.setChosenSignState}

            resault = {resault}
            // winnerState = {winnerState}
            />

            <Sign
            name = 'computer'
            generalState = {props.generalState}
            setGeneralState = {props.setGeneralState}
            chosenSignState = {props.chosenSignState}
            setChosenSignState = {props.setChosenSignState}

            chosenComputer = {props.chosenComputer}

            resault = {resault}
            // winnerState = {winnerState}
            />


            <div className="result-container">
                <p>{resaultMessage}</p>
                <button onClick={() => handlerNewGame(props)}>PLAY AGAIN</button>
            </div>

        </div>

    )
}

export default Game;



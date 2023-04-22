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
            resaultMessage = 'YOU WIN';
            // console.log('Win');
            break;

        case -4:
        case -2:
        case 3:
        case 1:
            resaultMessage = 'YOU LOSE';
            // console.log('Lose');
            break;
        
        default:
            resaultMessage = 'DRAW';
            // console.log('DRAW');
            break;
    }
}


function Game(props) {
    // console.log(props.chosenSignState)

    selectWinner(props);

    // const [winnerState, setWinnerState] = useState({resaultMessage});
    

    return (
        <div className="game">
            <Sign
            name = 'chosen'
            generalState = {props.generalState}
            setGeneralState = {props.setGeneralState}
            chosenSignState = {props.chosenSignState}
            setChosenSignState = {props.setChosenSignState}

            winnerState = {winnerState}
            />

            <Sign
            name = 'computer'
            generalState = {props.generalState}
            setGeneralState = {props.setGeneralState}
            chosenSignState = {props.chosenSignState}
            setChosenSignState = {props.setChosenSignState}

            chosenComputer = {props.chosenComputer}

            winnerState = {winnerState}
            />


            <div className="result-container">
                <p>{resaultMessage}</p>
                <button>PLAY AGAIN</button>
            </div>

        </div>

    )
}

export default Game;



import Sign from "./sign";

function Game(props) {
    // console.log(props)

    return (
        <div className="game">
            <Sign
            name = 'chosen'
            generalState = {props.generalState}
            setGeneralState = {props.setGeneralState}
            chosenSignState = {props.chosenSignState}
            setChosenSignState = {props.setChosenSignState} 
            />

            <Sign
            name = 'computer'
            generalState = {props.generalState}
            setGeneralState = {props.setGeneralState}
            chosenSignState = {props.chosenSignState}
            setChosenSignState = {props.setChosenSignState} 
            />

        </div>

    )
}

export default Game;



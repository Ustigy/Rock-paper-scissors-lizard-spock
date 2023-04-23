import Sign from './sign';

function Main(props) {

    return (
        <div className='main'>
            <Sign 
                arraySign = {props.arraySigns.scissors}
                img = {props.arraySigns.scissors.img.scissors}

                generalState = {props.generalState}
                setGeneralState = {props.setGeneralState}
                chosenSignState = {props.chosenSignState}
                setChosenSignState = {props.setChosenSignState}
            />

            <Sign 
                arraySign = {props.arraySigns.spock}
                img = {props.arraySigns.spock.img.spock}

                generalState = {props.generalState}
                setGeneralState = {props.setGeneralState}
                chosenSignState = {props.chosenSignState}
                setChosenSignState = {props.setChosenSignState}
            />

            <Sign 
                arraySign = {props.arraySigns.paper}
                img = {props.arraySigns.paper.img.paper}

                generalState = {props.generalState}
                setGeneralState = {props.setGeneralState}
                chosenSignState = {props.chosenSignState}
                setChosenSignState = {props.setChosenSignState}
            />

            <Sign 
                arraySign = {props.arraySigns.lizard}
                img = {props.arraySigns.lizard.img.lizard}

                generalState = {props.generalState}
                setGeneralState = {props.setGeneralState}
                chosenSignState = {props.chosenSignState}
                setChosenSignState = {props.setChosenSignState}
            />

            <Sign 
                arraySign = {props.arraySigns.rock}
                img = {props.arraySigns.rock.img.rock}

                generalState = {props.generalState}
                setGeneralState = {props.setGeneralState}
                chosenSignState = {props.chosenSignState}
                setChosenSignState = {props.setChosenSignState}
            />
        </div>
    )
}



export default Main;
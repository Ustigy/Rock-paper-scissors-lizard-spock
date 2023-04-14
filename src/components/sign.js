import Game from "./game";

function handlerSignClick(props) {
    props.setGeneralState('game');
    
    props.setChosenSignState(props);

    // let chosenSign = props;
    // <Game chosenSign = {props}/>
}

function Sign(props) {
    // console.log(props.setGeneralState)

    return (
        <div className={'sign_container' + ' ' + props.className} 
             style={{gridArea: props.gridArea}}
             onClick={() => handlerSignClick(props)} >
             
            <div className='sign_circle_color' style={{backgroundColor: props.backgroundColor, 
                                                       boxShadow: props.boxShadow}} >                          
                <div className='sign_circle_white'>
                    <img className='sign_img' src={props.img} />
                </div>
            </div>

        </div>
    )
}

export default Sign;
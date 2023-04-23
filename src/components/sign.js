import { useEffect } from "react";
import Game from "./game";

function handlerSignClick(props) {
    props.setGeneralState('game');
    
    props.setChosenSignState(props);
}


function Sign(props) {

    if (props.generalState === 'main') {
        return (
            <div className={'sign_container' + ' ' + props.arraySign.className} 
                 style={{gridArea: props.arraySign.gridArea}}
                 onClick={() => handlerSignClick(props)} >
                 
                <div className='sign_circle_color' style={{backgroundColor: props.arraySign.backgroundColor, 
                                                           boxShadow: props.arraySign.boxShadow}} >                          
                    <div className='sign_circle_white'>
                        <img className='sign_img' src={props.img} />
                    </div>
                </div>
    
            </div>
        )
    } else if (props.generalState === 'game') {

        if (props.name === 'chosen') {

            let styleResault = null;
            if (props.resault === 'win') {
                styleResault = 'highliterWinner';
            } else if (props.resault === 'draw') {
                styleResault = 'highliterDraw';
            }
            
            return (
                <div className="game_container">
                    <p className="gameSign__title">YOU PICKED</p>
    
                    <div className={'gameSign' + ' ' + styleResault} >
    
                        <div className='sign_circle_color' style={{backgroundColor: props.chosenSignState.arraySign.backgroundColor, 
                                                        boxShadow: props.chosenSignState.arraySign.boxShadow,
                                                        cursor: 'default'}} >                      
                            <div className='sign_circle_white'>
                                <img className='sign_img' src={props.chosenSignState.img} />
                            </div>
                        </div>
    
                    </div>
    
                </div>
            )

        } else if (props.name === 'computer') {

            let styleResault = null;
            if (props.resault === 'lose') {
                styleResault = 'highliterLooser';
            } else if (props.resault === 'draw') {
                styleResault = 'highliterDraw';
            }

            return (
                <div className="game_container">
                        <p className="gameSign__title">THE HOUSE PICKED</p>
        
                        <div className={'gameSign' + ' ' + styleResault} >
        
                            <div className='sign_circle_color' style={{backgroundColor: props.chosenComputer.backgroundColor, 
                                                            boxShadow: props.chosenComputer.boxShadow,
                                                            cursor: 'default'}} >                      
                                <div className='sign_circle_white'>
                                    <img className='sign_img' src={props.chosenComputer.img[props.chosenComputer.className]} />
                                </div>
                            </div>
        
                        </div>
                </div>
            )
        }
    }
}

export default Sign;
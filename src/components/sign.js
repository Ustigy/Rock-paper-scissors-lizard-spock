import { useEffect } from "react";
import Game from "./game";

function handlerSignClick(props) {
    props.setGeneralState('game');
    
    props.setChosenSignState(props);

    // let chosenSign = props;
    // <Game chosenSign = {props}/>

}


// function computerTurn (props) {
//     let arr = ['scissors', 'spock', 'paper', 'lizard', 'rock'];

//     let rand = Math.floor(Math.random() * arr.length);
//     // console.log(arr[rand])

// }


function Sign(props) {
    // console.log(props.setGeneralState)
    //  console.log(props.generalState)
    //  console.log(props.chosenSignState)  

    // console.log(props.arraySign.img)
    // console.log(props.arraySign.img.scissors)

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
            // console.log(props.winnerState.resaultMessage)
            
            return (
                <div className="game_container">
                    <p className="gameSign__title">YOU PICKED</p>
                    {/* {console.log(props.chosenSignState)} */}
    
                    <div className='gameSign' >
    
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

            return (
                <div className="game_container">
                        <p className="gameSign__title">THE HOUSE PICKED</p>
                        {/* {console.log(props.chosenSignState)} */}
        
                        <div className='gameSign' >
        
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




// else if (props.name === 'computer') {

//     // useEffect(() => computer)
//     // let delay = setTimeout(computer, 3000);

//     function computer() {
//         return (
//             <div className="game_container">
//                     <p className="gameSign__title">THE HOUSE PICKED</p>
//                     {/* {console.log(props.chosenSignState)} */}
    
//                     <div className='gameSign' >
    
//                         <div className='sign_circle_color' style={{backgroundColor: props.chosenSignState.backgroundColor, 
//                                                         boxShadow: props.chosenSignState.boxShadow,
//                                                         cursor: 'default'}} >                      
//                             <div className='sign_circle_white'>
//                                 <img className='sign_img' src={props.chosenSignState.img} />
//                             </div>
//                         </div>
    
//                     </div>
    
//             </div>
//         )
//     }

//     return(
//         <div className="game_container">
//                 <p className="gameSign__title">THE HOUSE PICKED</p>

//                 <div className='gameSign' >

//                     <div className='sign_circle_color' style={{backgroundColor: '#140D30', 
//                                                        cursor: 'default'}} />                      

//                 </div> 
//         </div>
//     )






















                // <div className="game_container">
                //         <p className="gameSign__title">THE HOUSE PICKED</p>
                //         {console.log(props.chosenSignState)}
        
                //         <div className={'gameSign'} >
        
                //             <div className='sign_circle_color' style={{backgroundColor: props.chosenSignState.backgroundColor, 
                //                                             boxShadow: props.chosenSignState.boxShadow,
                //                                             cursor: 'default'}} >                      
                //                 <div className='sign_circle_white'>
                //                     <img className='sign_img' src={props.chosenSignState.img} />
                //                 </div>
                //             </div>
        
                //         </div>
        
                // </div>

















        // return (
        //     <div className="game">
        //         <div className="game_container">
        //             <p className="gameSign__title">YOU PICKED</p>
        //             {console.log(props.chosenSignState)}
    
        //             <div className={'gameSign'} >
    
        //                 <div className='sign_circle_color' style={{backgroundColor: props.chosenSignState.backgroundColor, 
        //                                                    boxShadow: props.chosenSignState.boxShadow,
        //                                                    cursor: 'default'}} >                      
        //                     <div className='sign_circle_white'>
        //                         <img className='sign_img' src={props.chosenSignState.img} />
        //                     </div>
        //                 </div>
    
        //              </div>
    
        //         </div>
        //     </div>
        // )
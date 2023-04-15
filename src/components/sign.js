import { useEffect } from "react";
import Game from "./game";

function handlerSignClick(props) {
    props.setGeneralState('game');
    
    props.setChosenSignState(props);

    // let chosenSign = props;
    // <Game chosenSign = {props}/>
}

function Sign(props) {

    // console.log(props.setGeneralState)
    //  console.log(props.generalState)
    //  console.log(props.chosenSignState)

    

    if (props.generalState === 'main') {
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
    } else if (props.generalState === 'game') {

        if (props.name === 'chosen') {
            return (
                <div className="game_container">
                    <p className="gameSign__title">YOU PICKED</p>
                    {/* {console.log(props.chosenSignState)} */}
    
                    <div className='gameSign' >
    
                        <div className='sign_circle_color' style={{backgroundColor: props.chosenSignState.backgroundColor, 
                                                        boxShadow: props.chosenSignState.boxShadow,
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
        
                            <div className='sign_circle_color' style={{backgroundColor: props.chosenSignState.backgroundColor, 
                                                            boxShadow: props.chosenSignState.boxShadow,
                                                            cursor: 'default'}} >                      
                                <div className='sign_circle_white'>
                                    <img className='sign_img' src={props.chosenSignState.img} />
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
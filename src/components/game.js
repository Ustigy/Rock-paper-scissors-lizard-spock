function Game(props) {
    return (
        <div className="game">
            <div className="game_container">
                <p className="gameSign__title">YOU PICKED</p>
                {console.log(props.chosenSignState)}

                <div className={'gameSign'} >

                    <div className='sign_circle_color' style={{backgroundColor: props.chosenSignState.backgroundColor, 
                                                       boxShadow: props.chosenSignState.boxShadow,
                                                       cursor: 'default'}} >                      
                        <div className='sign_circle_white'>
                            <img className='sign_img' src={props.chosenSignState.img} />
                        </div>
                    </div>

                 </div>

            </div>
        </div>
    )
}

export default Game;


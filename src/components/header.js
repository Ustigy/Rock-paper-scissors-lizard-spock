function Header(props) {
    let names_signs = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    return (
        <div className="header">
            <div className="names_signs">
                {names_signs.map((el, i) => <p key={i}>{el.toUpperCase()}</p>)}
            </div>

            <div className="score">
                <p className='score_name'>SCORE</p>
                {/* <p className="score_counter">{props.generalScore}</p> */}
                <p className="score_counter">{props.generalScore}</p>
            </div>
        </div>
    )
}

export default Header;
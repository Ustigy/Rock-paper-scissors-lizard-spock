import { useState } from 'react';

import rules from '../img/image-rules-bonus.svg';
import close from '../img/icon-close.svg';


function RulesCard(props) {

    if(props.rulesState === 'openRules') {
        return (
            <div className="rules-card">
                <div className='rules-header'>
                    <span>RULES</span>
                    <button><img src={close} onClick={() => props.setRulesState('closeRules')}/></button>
                </div>
                <img src={rules} className='rules-img' />
            </div>
        )
    }

}

function Rules() {
    const [rulesState, setRulesState] = useState('closeRules');

    return (
        <div className="rules">
            <button className="rules-button" onClick={() => setRulesState('openRules')}>RULES</button>
            <RulesCard rulesState = {rulesState} setRulesState = {setRulesState} />
        </div>
    )
}

export default Rules;

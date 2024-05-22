import React, {useContext} from 'react';
import { AppContext } from "../App";

function Key({keyVal, bigKey, disabled}) {
    const {gameOver, onSelectletter, onDelete, onEnter} = useContext(AppContext);

    const selectLetter = () => {
        if(gameOver.gameOver) return;
        if(keyVal === "ENTER"){
            onEnter();
        } else if(keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectletter(keyVal);
        }
    };
    return (
        <div className='key' id={bigKey ? 'big' : disabled && 'disabled'} onClick={selectLetter}>{keyVal}</div>
    );

}

export default Key;
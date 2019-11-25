import React from 'react'
import './Word.css';

const Word = props => {
    const wordLetters = props.charList.map(function(character, index) {
        if(!props.guessesList.includes(character) && props.guessesLeft !== 0) {
            character = '_' 
        }
        return (
            <div className = 'Inner' key = {index}>{character}</div>
        );
    });

    return (
        <div className = 'Outer'>{wordLetters}</div>
    )
};

export default Word;
import React from 'react'
import LetterCard from './LetterCard'
import './LetterList.css';
import { LETTERS } from '../../constants/LETTERS';
import { GAME_STATE } from '../../constants/GAMESTATE';

class LetterList extends React.Component {

    renderLetters() {
        let letterRow = [];
        for(let i = 0; i < LETTERS.length; i++) {
            letterRow[i] = LETTERS[i].map(letter => {
                return (
                    <LetterCard 
                        value = {letter} 
                        updateGuesses = {this.props.updateGuesses}
                        key = {letter} 
                    />
                );
            }); 
        }
        
        return letterRow;
    }

    render() {
        if(this.props.gameState === GAME_STATE.IN) {
            let letterRow = this.renderLetters();
            return (
                <div className = 'LetterList'>
                    <div>{letterRow[0]}</div>
                    <div>{letterRow[1]}</div>
                    <div>{letterRow[2]}</div>
                </div>
            )
        }
        return <div></div>;   
    }
}


export default LetterList;


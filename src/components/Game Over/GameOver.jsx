import React from 'react';
import { GAME_STATE } from '../../constants/GAMESTATE';
import './GameOver.css';


class GameOver extends React.Component {
    render() {
        if(this.props.gameState === GAME_STATE.LOST) {
            return this.GameOverCard('YOU LOSE 😞');
        } else if (this.props.gameState === GAME_STATE.WON) {
            return this.GameOverCard('YOU WIN 😁');
        } 
        return <div></div>;
    }

    GameOverCard = (message) => {
        return(
            <div className = 'GameCard' onClick = {() => this.props.startNewGame()}>
                <div>{message}</div>
                <div>PLAY AGAIN?</div>
                <img className = 'bounce' src = {require('../../images/arrow_icon.png')} alt= 'arrow'/>
            </div>
        );
    }
}

export default GameOver;
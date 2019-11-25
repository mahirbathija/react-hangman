import React from "react";
import { Hangman } from './components';
import LetterList from './components/Letters/LetterList';
import Word from './components/Word/Word';
import GameOver from './components/Game Over/GameOver'
import './App.css';
import './Arrowbouce.css';
import { GAME_STATE } from './constants/GAMESTATE';

const randomWords = require('random-words');

class App extends React.Component {

  constructor(props) {
    super(props);
    let randomWord = randomWords().toUpperCase().split('');
    this.state = { 
      guessesLeft:10, 
      guesses: [], 
      gameState: GAME_STATE.NEW,  
      word: randomWord,
      charsLeft: randomWord
    };
  }

  render() {
    if(this.state.gameState === GAME_STATE.NEW) {
      return this.renderIntroductionContent();
    } else {
      return this.renderInGameContent();
    }
  }

  renderIntroductionContent() {
    return(
      <div className = 'App'>
        <div className = 'NewGame' onClick = {() => this.setState({gameState: GAME_STATE.IN})}>
          <h1>I'VE ALREADY THOUGHT OF A WORD!</h1>
          <h1>READY TO PLAY?</h1>
          <img className = 'bounce' src = {require('./images/arrow_icon.png')} alt= 'arrow'/>
        </div>
      </div>
    );
  }

  renderInGameContent() {
    return(
      <div className='App'>
        <div className='container'>
          <h1 className = 'Header'>React Hangman</h1>
          <Hangman incorrectGuessCount={10 - this.state.guessesLeft} />
          <h4 className = 'Header'>Guesses Left: {this.state.guessesLeft}</h4>
          <Word 
            charList = {this.state.word}
            guessesList = {this.state.guesses}
            guessesLeft = {this.state.guessesLeft}
          />
          <LetterList 
            updateGuesses = {this.updateGuesses}
            gameState = {this.state.gameState}
          />
          <GameOver 
            startNewGame = {this.startNewGame}
            gameState = {this.state.gameState}
          /> 
        </div>
      </div>
    );
  }

  updateGuesses = async guess => {
    if(!this.state.word.includes(guess) && this.state.guessesLeft !== 0) {
      await this.setState({guessesLeft: this.state.guessesLeft - 1});
      if(this.state.guessesLeft === 0) {
        await this.setState({gameState: GAME_STATE.LOST})
      }
    } else if (this.state.word.includes(guess)) {
      await this.setState({charsLeft: this.state.charsLeft.filter(c => c !== guess) })
      if (this.state.charsLeft.length === 0) {
        await this.setState({gameState: GAME_STATE.WON})
      }
    }
    this.setState({guesses: this.state.guesses.concat(guess)});
  }

  startNewGame = async () => {
    let newRandomWord = randomWords().toUpperCase().split('');
    await this.setState({
                    guessesLeft:10, 
                    guesses: [], 
                    gameState: GAME_STATE.IN,  
                    word: newRandomWord,
                    chasLeft: newRandomWord
                  });
  }
}

export default App;

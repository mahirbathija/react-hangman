import React from 'react';
import './LetterCard.css';

class LetterCard extends React.Component {

    state = { disabled: false }

    render() {  
        return (
            <button className = 'LetterCard' onClick = {this.buttonClick} disabled = {this.state.disabled}>
                {this.props.value}
            </button>
        )
    }

    buttonClick = () => {
        this.setState({disabled: true});
        this.props.updateGuesses(this.props.value);
    }
}

export default LetterCard;
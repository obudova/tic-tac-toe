import React from 'react';
import StyledActionButton from './ActionButton.styled';

class ActionButton extends React.Component {
  isHidden = false;

  handleClick = () => {
    console.log('clicked');
    this.isHidden = true;
    this.forceUpdate();
    this.props.callback();
  };

  render() {
    return (
      <StyledActionButton>
        <button
          onClick={this.handleClick}
          className={this.isHidden ? 'hide' : ''}>
          {this.props.text}
          </button>
      </StyledActionButton>
    )
  }
}

export default ActionButton;
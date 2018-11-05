import React from 'react';
import StyledActionButton from './ActionButton.styled';

class ActionButton extends React.Component {
  isHidden = false;

  handleClick = () => {
    this.isHidden = true;
    this.forceUpdate();

    // Todo: figure out how to get rid of timeout :)
    setTimeout(() => {
      this.props.callback();
    }, 900)
  };

  componentWillReceiveProps(nextProps) {
    this.isHidden = false;
  }

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
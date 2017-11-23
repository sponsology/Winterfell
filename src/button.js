var React = require('react');
import ProgressButton from 'react-progress-button'

class Button extends React.Component {

  handleClick(e) {
    e.preventDefault();

    this.props.onClick();
  }

  render() {
    return (
      <ProgressButton href="#"
         
         state={this.props.buttonState}
         onClick={this.handleClick.bind(this)}>
        {this.props.text}
      </ProgressButton>
    );
  }

};

Button.defaultProps = {
  buttonState: '',
  text      : 'Submit',
  className : undefined,
  onClick   : () => {}
};

module.exports = Button;

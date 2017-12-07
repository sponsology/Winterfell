var React = require('react');
import ProgressButton from 'react-progress-button'

class Button extends React.Component {
  constructor(props){
    super(props)
    console.log("Button props", props)
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
    setTimeout(() => {
      this.setState({buttonState: 'success'})
    }, 3000)
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

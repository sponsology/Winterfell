var React = require('react');
import ProgressButton from 'react-progress-button'

class Button extends React.Component {
  constructor(props){
    super(props)
    console.log("Button props", props)
    this.state = {buttonState: props.buttonState}
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  componentWillReceiveProps(nextProps) {
    console.log("NextProps" , nextProps);
    this.setState({
      buttonState     : nextProps.buttonState
    });
  }

  render() {
    return (
      <ProgressButton href="#"
         state={this.state.buttonState}
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

var React = require('react');

class PrivacyInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked : props.defaultChecked
    };
  }

  handleChange(e) {
    if (e) {
      this.setState({
        checked : !this.state.checked
      }, () => {
        this.props.onChange(this.state.checked
                            ? this.props.value
                            : undefined);
      });
    } else {
      this.props.onChange(this.state.checked
                            ? this.props.value
                            : undefined);
    }
  }

  componentDidMount() {
    if (this.state.checked) {
      this.handleChange();
    }
  }

  render() {
    return (
      <div className={this.props.classes.privacyInput}>
        <label className={this.props.classes.privacyLabel}
               id={this.props.labelId}>
          <input type="checkbox"
                 name={this.props.name}
                 aria-labelledby={this.props.labelId}
                 className={this.props.classes.checkbox}
                 defaultChecked={this.state.checked}
                 value={this.props.value}
                 required='required'
                 onChange={this.handleChange.bind(this)}
                 onBlur={this.props.onBlur.bind(null, (this.state.checked
                                                        ? this.props.value
                                                        : undefined))} />
          By checking this box, I agree to the terms of the&nbsp;
          <a href="/privacy-policy">Privacy Policy</a>
          , and the&nbsp;
          <a href="/terms">Terms and Conditions</a>

        </label>
      </div>
    );
  }

};

PrivacyInput.defaultProps = {
  text     : '',
  defaultChecked: false,
  classes  : {},
  name     : '',
  value    : '',
  onChange : () => {},
  onBlur   : () => {}
};

module.exports = PrivacyInput;

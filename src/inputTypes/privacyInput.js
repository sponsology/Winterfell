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
      <div className={this.props.classes.checkboxListItem}>
        <p>Welcome. You are about to set up your Account and Profile with our community.  Your Profile will be comprehensive to optimise your matches.  You can save this form as you go.</p>
          <input type="checkbox"
                 name={this.props.name}
                 id='id-privacy'
                 autoComplete={this.props.autoComplete}
                 aria-labelledby={this.props.labelId}
                 className={this.props.classes.checkbox}
                 defaultChecked={this.state.checked}
                 value={this.props.value}
                 required='required'
                 onChange={this.handleChange.bind(this)}
                 onBlur={this.props.onBlur.bind(null, (this.state.checked
                                                        ? this.props.value
                                                        : undefined))} />
          <label className={this.props.classes.checkboxLabel}
               id={this.props.labelId}
               htmlFor='id-privacy'>

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
  autoComplete: '',
  value    : '',
  onChange : () => {},
  onBlur   : () => {}
};

module.exports = PrivacyInput;

import React, {Component} from 'react';

export default class About extends Component {
  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>This is about me.</p>
        <button onClick={this.setVar}>Sign up!</button>
      </div>
    )
  }
}

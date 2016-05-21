import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

if (Meteor.isClient) {
  Meteor.startup(function() {
    render(<App />, document.getElementById("render-target"));
  });
}

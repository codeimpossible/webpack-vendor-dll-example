var React = require('react');

var Button = React.createClass({
  render: function() {
    return React.createElement("button", null, "Click Me!");
  }
});

module.exports = Button;

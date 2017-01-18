var React = require('react');

var Welcome = React.createClass({
  render: function() {
    return React.createElement("div", null, "Hello from react v" + React.version + " :)");
  }
});

module.exports = Welcome;

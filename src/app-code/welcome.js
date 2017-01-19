var React = require('react');
var Button = require('ui/components/Button');

var Welcome = React.createClass({
  render: function() {
    return React.createElement("div", null, "Hello from react v" + React.version + " :)", React.createElement(Button));
  }
});

module.exports = Welcome;

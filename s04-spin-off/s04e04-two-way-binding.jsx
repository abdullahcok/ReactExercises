import LinkedStateMixin from 'react-addons-linked-state-mixin'; // ES6

var createReactClass = require('create-react-class');

var NoLinkForWar = createReactClass({
  getInitialState: function() {
    return {message: 'Hello Earth!'};
  },
  handleChange: function(event) {
    this.setState({message: event.target.value});
  },
  render: function() {
    var message = this.state.message;
    return <input type="text" value={message} onChange={this.handleChange} />;
  }
});
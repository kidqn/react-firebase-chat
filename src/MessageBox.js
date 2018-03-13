import React, {Component} from 'react';
import trim from 'trim';

class MessageBox extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.state = {
      message: ''
    };
  }
  onChange(e){
      this.setState({
        message: e.target.value
      });
  }
  onKeyDown(e){
    if(e.keyCode === 13 && e.target.value.trim() !== ''){
      e.target.value = e.target.value.trim();
      e.preventDefault();
      var a = '';
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: e.target.value.trim()
      });

      this.setState({
        message: trim('')
      });
    }
  }
  render() {
    return (
      <form>
        <textarea
            className="textarea"
            placeholder="Type a message"
            cols="100"
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            value={this.state.message}>
          </textarea>
      </form>
    )
  }
}

export default MessageBox
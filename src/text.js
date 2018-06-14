import React, {Component} from 'react';

class TextReverese extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 'Hello'
    }
  }
  render(){
    return(
      <div>
        <input className='inputText' type='text' type='text' value={this.state.value} onChange={this.handleChange} />
        <p className='paraInput'>{this.state.value}</p>
      </div>
    )
  }
  handleChange = event => {
    let string = event.target.value
    if((typeof string) !== 'number'){
      function reverse(s){
        return s.split("").reverse().join("");
      }
      this.setState({ value: reverse(string.toUpperCase()) });
    }else{
      this.setState({ value: (string * string) });
    }
  }
}

export default TextReverese;

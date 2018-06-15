import React, {Component} from 'react';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    }
  }
  render(){
    return(
      <div>
        <input className='inputText' type='text' value={this.state.value} onChange={this.handleChange} />
        <button className='increaseBtn' onClick={this.handleIncrease}>increase</button>
        <button className='decreaseBtn' onClick={this.handleDecrease}>decrease</button>
        <div>{this.state.value}</div>
      </div>
    )
  }
  handleChange = event => {
    let counter = event.target.value
    if( !isNaN(counter ) && (typeof Number(counter)) === 'number'){
      this.setState({ value: + counter });
    }

  }
  handleIncrease = event => {
    this.setState({value: this.state.value +1})
  }
  handleDecrease = event => {
    this.setState({value: this.state.value -1})
  }
}

export default Counter;

import React, {Component} from 'react';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    }
  }
  render(){
    return(
      <div>
        <input className='inputText' type='text' counter={this.state.counter} onChange={this.handleChange} />
        <button className='increaseBtn' onClick={this.handleIncrease}>increase</button>
        <button className='decreaseBtn' onClick={this.handleDecrease}>decrease</button>
      </div>
    )
  }
  handleChange = event => {
    let toNumber = parseInt(event.target.counter)
    if( !isNaN(toNumber) ){
      return this.setState({ counter: toNumber });
    }
  }
  handleIncrease = event => {
    this.setState({counter: this.state.counter +1})
  }
  handleDecrease = event => {
    this.setState({counter: this.state.counter -1})
  }
}

export default Counter;

/*Alternativ 1: räknare
Komponenten ska innehålla ett textfält och två button-element. Den ska dessutom skriva ut ett tal.
Talet ska finnas lagrat i komponentens state. Användaren ska kunna skriva in strängar i textfältet.
När man klickar på den första knappen ska värdet i state ökas; den andra knappen minskar värdet.
Om användaren skriver in ett tal i textfältet så ska det ersätta talet som finns lagrat i state.
Men om användaren skriver in något som inte går att göra om till ett tal så ska värdet behållas.

1. textfelt <p> *CHECK*
2. 2st knappar <button> *CHECK*
3. talet ska finnas i this.state *CHECK*
4. knapp 1: öka state +1 *CHECK*
5. knapp 2: minska med -1 *CHECK*
6. kunna skriva in en sträng som tal i input *CHECK*
7. Om strängen inte är ett tal ska this.state behålla sitt värde *CHECK*
*/

import React from 'react';
import {shallow} from 'enzyme';
import Counter from './counter.js'

describe('Counter', () => {
  it('#1 shallow smoke test <Counter /> ', () => {
    let wrapper = shallow(<Counter />);
  });
  it('#2 will increase button render', () => {
    let wrapper = shallow(<Counter/>)
    const increaseBtn = wrapper.find('button.increaseBtn').length
    expect(increaseBtn).toBe(1);
  });
  it('#3 will decrease button render', () => {
    let wrapper = shallow(<Counter/>)
    const decreaseBtn = wrapper.find('button.decreaseBtn').length
    expect(decreaseBtn).toBe(1);
  });
  it('#4 will input field render', () => {
    let wrapper = shallow(<Counter/>)
    const inputField = wrapper.find('input.inputText').length
    expect(inputField).toBe(1)
  });
  it('#5 will state have value', () => {
    let wrapper = shallow(<Counter />);
    expect( wrapper.state('counter') ).toBe(0);
  });
  it('#6 will increaseBtn add 1 to counter', () => {
    let wrapper = shallow(<Counter />);
    const increaseBtn = wrapper.find('button').at(0);;
    increaseBtn.simulate('click')
    expect(wrapper.state('counter')).toBe(1);
  })
  it('#7 will decreaseBtn subtract 1 to counter', () => {
    let wrapper = shallow(<Counter />);
    const increaseBtn = wrapper.find('button').at(1);;
    increaseBtn.simulate('click')
    expect(wrapper.state('counter')).toBe(-1);
  })
  it('#8 set input to state', () => {
    let wrapper = shallow(<Counter />);
    const inputField = wrapper.find('input').at(0)
    inputField.simulate('change', { target: { counter: 32 } })
    expect(wrapper.state('counter')).toBe(32)
  })
  it('#9 convert string to number and set state', () => {
    let wrapper = shallow(<Counter />);
    const inputField = wrapper.find('input').at(0)
    inputField.simulate('change', { target: { counter: '32' } })
    expect(wrapper.state('counter')).toBe(32)
  })
  it('#10 if string in input is not a number, then keep sate ', () => {
    let wrapper = shallow(<Counter />);
    const inputField = wrapper.find('input').at(0)
    inputField.simulate('change', { target: { counter: 'Hello' } })
    expect(wrapper.state('counter')).toBe(0)
  })

})

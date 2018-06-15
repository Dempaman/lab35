<<<<<<< HEAD
=======
/*Alternativ 2: redigerbar lista
Komponenten ska innehålla ett textfält där användaren kan skriva in en text. Där ska finnas en button,
som man kan klicka på för att lägga till texten i en lista. Komponenten ska visa listan på något lämpligt sätt.
När listan renderas ska varje element i den förses med en button som kan användas för att ta bort elementet.

1. Textfält där användaren ska kunna skriva in en text.
2. Ska finnas en knapp vid textfältet för att lägga till texten i en lista.
3. Komponenten ska visa listan på lämpligt vis.
4. När listan renderas ska varje element i den förses med en button som kan användas för att ta bort elementet.
*/


>>>>>>> 40cc9d8501cf971dbbfac0e80f3741776a79a442
import React from 'react';
import {shallow} from 'enzyme';
import EditList from './editList.js';


describe('EditList', () => {
<<<<<<< HEAD
 it('#1 shallow smoke test <EditList /> ', () => {
   let wrapper = shallow(<EditList />);
 });
 it('#2 renders input', () => {
   let input = shallow(<input className="inputNewItem"></input>);
   const inputNewItem = input.is('.inputNewItem')
   expect(inputNewItem).toBe(true);
 });
 it('#3 renders button textfield ', () => {
   let button = shallow(<button className='submitButton'>ADD ITEM</button>);
   const submitButton = button.is('.submitButton')
   expect(submitButton).toBe(true);
 });
 it('#4 renders list ', () => {
   let list = shallow(<ul className="itemList"></ul>);
   const listOfItem = list.is('.itemList')
   expect(listOfItem).toBe(true);
 });
 it('#5 renders remove button ', () => {
   let wrapper = shallow(<EditList />);

   let input = wrapper.find("input").at(0);
   let button = wrapper.find("button").at(0);
   let list = wrapper.find("li").at(0);

   input.simulate("change", {target: {value: "Milk"}});
   button.simulate("click");

   let removeBtn = wrapper.find("button.removeButton").length
   expect(removeBtn).toBe(1);
 });
 it('#6 new list item ', () => {
   let wrapper = shallow(<EditList />);

   let input = wrapper.find("input").at(0);
        let button = wrapper.find("button").at(0);

   input.simulate("change", {target: {value: "Milk"}});
        button.simulate("click");

        const shouldOutput = <p>Milk</p>;
        expect(wrapper.contains(shouldOutput)).toBe(true);
 });
 it('#7 remove list item ', () => {
   let wrapper = shallow(<EditList />);

   wrapper.setState({itemList: ["Milk", "Egg", "Butter"]})

   let removeButton = wrapper.find("button").at(1);
        removeButton.simulate("click");
        expect(wrapper.state("itemList").length).toBe(2)
 });
=======
  it('#1 shallow smoke test <EditList /> ', () => {
    let wrapper = shallow(<EditList />);
  });
  it('#2 renders input', () => {
    let input = shallow(<input className="inputNewItem"></input>);
    const inputNewItem = input.is('.inputNewItem')
    expect(inputNewItem).toBe(true);
  });
  it('#3 renders button textfield ', () => {
    let button = shallow(<button className='submitButton'>ADD ITEM</button>);
    const submitButton = button.is('.submitButton')
    expect(submitButton).toBe(true);
  });
  it('#4 renders list ', () => {
    let list = shallow(<ul className="itemList"></ul>);
    const listOfItem = list.is('.itemList')
    expect(listOfItem).toBe(true);
  });
  it('#5 renders remove button ', () => {
    let wrapper = shallow(<EditList />);

    let input = wrapper.find("input").at(0);
    let button = wrapper.find("button").at(0);
    let list = wrapper.find("li").at(0);

    input.simulate("change", {target: {value: "Milk"}});
    button.simulate("click");

    let removeBtn = wrapper.find("button.removeButton").length
    expect(removeBtn).toBe(1);
  });
  it('#6 new list item ', () => {
    let wrapper = shallow(<EditList />);

    let input = wrapper.find("input").at(0);
		let button = wrapper.find("button").at(0);

    input.simulate("change", {target: {value: "Milk"}});
		button.simulate("click");

		const shouldOutput = <p>Milk</p>;
		expect(wrapper.contains(shouldOutput)).toBe(true);
  });
  it('#7 remove list item ', () => {
    let wrapper = shallow(<EditList />);

    wrapper.setState({itemList: ["Milk", "Egg", "Butter"]})

    let removeButton = wrapper.find("button").at(1);
		removeButton.simulate("click");
		expect(wrapper.state("itemList").length).toBe(2)
  });
>>>>>>> 40cc9d8501cf971dbbfac0e80f3741776a79a442
})

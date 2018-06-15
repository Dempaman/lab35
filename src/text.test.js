/*
Alternativ 5: transformera text
Komponenten ska innehålla ett input-element som användaren kan skriva in text i.
När användaren skriver i fältet ska komponenten skriva ut följande.
Tänk på att skriva ut respektive sträng i ett HTML-element som du kan plocka ut med en selektor.
Använd hellre CSS-klass än id.
texten baklänges, "10" → "01"
texten konverterad till bara stora bokstäver, "TeDeDe" → "TEDEDE"
texten som ett tal upphöjt till två, "5" → "25"

1. input-element *CHECK*
2. paragraf-element där våran text från input hamnar *CHECK*
3. vi har ett värde i state *CHECK*
4. state visas i <p> *CHECK*
5. input skrivs ut till <p> *CHECK*
6. input skrivs ut till state *CHECK*
7. texten ska vara uppercase *CHECK*
8. texten skrivs ut backlänges *CHECK*
9. texten som ett tal ska multipliceras med sig själv *CHECK*

*/

import React from 'react';
import {shallow} from 'enzyme';
import TextReverese from './text.js'

describe('string Reverese', () => {
  it('#1 shallow smoke test renders <TextReverese/>', () => {
    let wrapper = shallow(<TextReverese />)
  });
  it('#2 renders input-element', () => {
    let wrapper = shallow(<TextReverese />);
    const inputString = wrapper.find('input.inputText').length
    expect(inputString).toBe(1);
  })
  it('#3 renders paragraf-element', () => {
    let wrapper = shallow(<TextReverese />);
    const para = wrapper.find('p.paraInput').length
    expect(para).toBe(1);
  })
  it('#4 state have a value', () => {
    let wrapper = shallow(<TextReverese />);
    expect(wrapper.state('value')).toBe('Hello')
  })
  it('#5 value is rendered in <p>', () => {
    let wrapper = shallow(<TextReverese />)
    const para = wrapper.contains(<p className='paraInput'>Hello</p>)
    expect(para).toBe(true)
  })
  it('#6 make string reverese', () => {
    let wrapper = shallow(<TextReverese />)
    const inputString = wrapper.find('input').at(0)
    inputString.simulate('change', { target: { value: 'APEX' } })
    expect(wrapper.state('value')).toBe('XEPA')
  })
  it('#7 make number string reverese', () => {
    let wrapper = shallow(<TextReverese />)
    const inputString = wrapper.find('input').at(0)
    inputString.simulate('change', { target: { value: '10' } })
    expect(wrapper.state('value')).toBe('01')
  })
  it('#8 if number, multiplay with self', () => {
    let wrapper = shallow(<TextReverese />)
    const inputString = wrapper.find('input').at(0)
    inputString.simulate('change', { target: { value: 5 } })
    expect(wrapper.state('value')).toBe(25)
  })
})

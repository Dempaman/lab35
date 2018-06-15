<<<<<<< HEAD
=======
/*Alternativ 2: redigerbar lista
Komponenten ska innehålla ett textfält där användaren kan skriva in en text. Där ska finnas en button,
som man kan klicka på för att lägga till texten i en lista. Komponenten ska visa listan på något lämpligt sätt.
När listan renderas ska varje element i den förses med en button som kan användas för att ta bort elementet.

1. Textfält där användaren ska kunna skriva in en text. DONE
2. Ska finnas en knapp vid textfältet för att lägga till texten i en lista. DONE
3. Komponenten ska visa listan på lämpligt vis.
4. När listan renderas ska varje element i den förses med en button som kan användas för att ta bort elementet.
*/




>>>>>>> 40cc9d8501cf971dbbfac0e80f3741776a79a442
import React from 'react';

class EditList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      newItem: "",
      itemList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(e){
  let array = this.state.itemList;
  var i = array.indexOf(e);
    if(i !== -1) {
      array.splice(i, 1);
    }
  this.setState({itemList: array })
  }

  addItem(){
    this.setState({ itemList: [...this.state.itemList, this.state.newItem] })
    console.log(this.state.itemList)
  }

  handleChange(e){
    this.setState({newItem: e.target.value});
    console.log(this.state.newItem)
  }
  render(){
    var self = this;
    const dataList = this.state.itemList.map(function(data, index) {
      return (
        <li key={index}>
        <p>{data}</p>
        <button className="removeButton" onClick={()=> self.removeItem(data)}>Remove</button>
        </li>
      )
    })
    return(
      <div>
        <input className="inputNewItem" onChange={this.handleChange}></input>
        <button className="submitButton" onClick={this.addItem}>ADD ITEM</button>
        <ul className="itemList">
          {dataList}
        </ul>
      </div>
    )
  }
}


export default EditList;

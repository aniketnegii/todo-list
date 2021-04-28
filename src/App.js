import React from 'react';
import './App.css';
import ListItems from './listitem.js'

class App extends React.Component {
  
  state = {
    items: [],
    currentItem:{
      text:'',
      key:''
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== ""){
      const newitems = [...this.state.items, newItem];
      this.setState({
        items:newitems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  deleteItem = (key) => {
    const filterItems = this.state.items.filter(item =>
      item.key !== key);
      this.setState(
        {items:filterItems}
      )
  }

  render(){
    return (
      <div className="App">
        <form id = "to-do" onSubmit={this.addItem}>
          <input type='text' placeholder="Enter text" 
           value = {this.state.currentItem.text}
           onChange={this.handleInput} />
          <button type="submit"> Add </button>
        </form>
        <ListItems items={this.state.items} 
          deleteItem={this.deleteItem} ></ListItems>
      </div>
    );
  
  };  
}

export default App;

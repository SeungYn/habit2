
import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

import Navbar from './components/navbar';
//import LikeButton from './components/likeButton';

// function App() {
//   handleClick = (event) => {
//     console.log(event);
//   };
//   return <LikeButton title={'like'} onClick = {this.handleClick} />;
// }



class App extends Component {
  state = {
    habits : [
      {id : 1, name : 'Running', count : 0},
      {id : 2, name : 'Reading', count : 0},
      {id : 3, name : 'Coding', count : 0},
    ],
  };

  handleIncrement = habit =>{
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count : habit.count + 1};
      }

      return item;

    });
    this.setState({habits});
  };

  handleDecrement = (habit) =>{
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count - 1;
        return {...habit, count : count < 0 ? 0 : count};
      }

      return item;

    });
    this.setState({habits});
  };

  handleDelete = (habit) =>{
    const habits = this.state.habits.filter( item => item.id !== habit.id);
    this.setState({habits});
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  };

  handleReset = () =>{
    const habits = this.state.habits.map(item =>{
      if(item.count !== 0){
        return {...item, count : 0};
      }
      return item;
    });
    this.setState({habits});
  };

  render() {
    return (
    <div>
      <Navbar count={this.state.habits.filter(item => item.count > 0).length}/>
      
      <Habits 
        habits = {this.state.habits}
        onIncrement = {this.handleIncrement}
        onDecrement = {this.handleDecrement}
        onDelete = {this.handleDelete}
        onAdd={this.handleAdd}
        onReset = {this.handleReset}
      />
      
    </div>
    );
  }
}


export default App;

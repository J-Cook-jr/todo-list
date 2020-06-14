
import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      tasks: [],
    };
  }

}
export default App;

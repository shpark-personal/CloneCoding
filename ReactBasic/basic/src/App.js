import { Component } from 'react';
import './App.css';
import ScrollBox from './ScrollBox';
// import EventPractice from './EventPractice';
// import FirstComponent from './FirstComponent';
// import Say from './Say';
//import ValidationSample from './ValidationSample';

class App extends Component {
  render(){
    return(
      <div>
        <ScrollBox ref = {(ref) => this.ScrollBox = ref}/>
        <button onClick = {() => this.ScrollBox.scrollToBottom()}> 맨 밑으로 </button>
      </div>
    );
  }
}

export default App;

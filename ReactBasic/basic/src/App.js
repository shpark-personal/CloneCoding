import { Component } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary'
import LifeCycleSample from './LifeCycleSample';
//import LifeCycleSample from './LifeCycleSample';
//import IterationSample from './IterationSample';
//import ScrollBox from './ScrollBox';
// import EventPractice from './EventPractice';
// import FirstComponent from './FirstComponent';
// import Say from './Say';
//import ValidationSample from './ValidationSample';

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color : '#000000'
  }
  handleClick = () =>{
    this.setState({
      color : getRandomColor()
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color = {this.state.color}/>
        </ErrorBoundary> 
      </div>
    );
  }
}

export default App;

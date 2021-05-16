import React from 'react';
import ReactDOM from 'react-dom';
import FileConstructorCar from './App.js';

// Render function
/* const myfirstelement = <h1>Hello React!</h1>
ReactDOM.render(myfirstelement, document.getElementById('root')); */

// Introduction to JSX
/* const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Vipin</td>
    </tr>
    <tr>
      <td>Gupta</td>
    </tr>
  </table>
);

ReactDOM.render(myelement, document.getElementById('root')); */


// Use of JSX


const myelement = <h1>I am in Gurgaon</h1>;
ReactDOM.render(myelement, document.getElementById('root'));

// Without JSX
const myelementWithoutJSX = React.createElement('h1', {}, 'I do not use JSX!');
ReactDOM.render(myelementWithoutJSX, document.getElementById('root'));

const addmyelement = <h1> do sum {5 + 5} !</h1>
ReactDOM.render(addmyelement, document.getElementById('root'));


const mynewelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
ReactDOM.render(mynewelement, document.getElementById('root'));

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
ReactDOM.render(<Car />, document.getElementById('root'));

//create a function Component
function AnotherCar() {
  return <h1>In a function component</h1>
}

ReactDOM.render(<AnotherCar />, document.getElementById('root'));

// Component Constructor
class MarutiCar extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h1> Inside MarutiCar render method</h1>
  }
}

//marutiCar = new MarutiCar();

ReactDOM.render(<MarutiCar />, document.getElementById('root'));

//Component Constructor and State property
class HondaCar extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h1> Inside {this.state.color} HondaCar render method</h1>
    // return <h1> "Inside"  + "this.color" + "HondaCar render method"</h1>
  }
}
ReactDOM.render(<HondaCar />, document.getElementById('root'));

//Component Props
class ToyotaCar extends React.Component {
  render() {
    return <h1> Inside {this.props.color} ToyotaCar render method</h1>
  }
}
ReactDOM.render(<ToyotaCar color='red' />, document.getElementById('root'));

//Components inside component
class NissanCar extends React.Component {
  render() {
    return (
    <div>
      <p>I am inside NissarCar and nesting ToyotaCar</p>
      <HondaCar />
    </div>
    )
  }
}

ReactDOM.render(<NissanCar />, document.getElementById('root'));
// Rendering through file check import statement at line 3
ReactDOM.render(<FileConstructorCar />, document.getElementById('root'));

//Basic props similar to line no 92
class MahindraCar extends React.Component {
  render() {
    return (
    <p>It is MahindraCar: Inside {this.props.brand} </p>
    )
  }
}

ReactDOM.render(<MahindraCar brand='The Mahindra' />, document.getElementById('root'));


// Pass data from one component to another through props

class VolvoCar extends React.Component {
  render() {
    return (
      <div>
        <p>It is VolvoCar: Inside</p>
        <MahindraCar brand='The Mahindra'/>
      </div>
    
    )
  }
}
ReactDOM.render(<VolvoCar />, document.getElementById('root'));


// Pass data through a constant as well

class VolvoNewCar extends React.Component {
  render() {
    const carElement = 'The Mahindra in VolvoNew';
    return (
      <div>
        <p>It is VolvoNewCar: Inside</p>
        <MahindraCar brand= {carElement}/>
      </div>
    
    )
  }
}
ReactDOM.render(<VolvoNewCar />, document.getElementById('root'));
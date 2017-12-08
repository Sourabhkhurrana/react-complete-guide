import React, { Component } from 'react';
import Classes from './Person.css';

class Person extends Component {
  constructor( props ){
    super(props);
    console.log("[Person.js] inside constructor", props);
    this.state = {
        Person:[
          { id: 'as1', name:"Sourabh", age:24 },
          { id: 'as2', name:"Neeraj", age:23 },
          { id: 'as3', name:"Mudit", age:27 }
        ],
        showPersons: false
      }
  }

  componentWillMount () {
    console.log("[Person.js] componentWillMount!!!");
  }

  componentDidMount () {
    console.log("[Person.js] componentDidLast ");
  }

  render(){
    console.log("[Person.js] render method");
    return (
        <div className={Classes.Person}>
            <p onClick={this.props.click}>Im {this.props.name} and {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </div>
    )
  }
}

export default Person;

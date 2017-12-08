import React, { Component} from 'react';
import Person from './Person/Person'

class Persons extends Component{

  constructor( props ){
    super(props);
    console.log("[Persons.js] inside constructor", props);
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
    console.log("[Persons.js] componentWillMount!!!");
  }

  componentDidMount () {
    console.log("[Persons.js] componentDidLast ");
  }

  componentWillReceiveProps (nextProps) {
    console.log("[UPDATE Persons.js] componentWillRecieveUpdate ", nextProps);
  }

  shouldComponentUpdate (nextProp, nextState) {
    console.log("[update Persons.js] shouldComponentUpdate", nextProp, nextState);
    return nextProp.persons !== this.props.persons;
  }

  componentWillUpdate (nextProps, nextState){
    console.log("[update Persons.js] componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate (nextProps, nextState){
    console.log("[update Persons.js] componentDidUpdate", nextProps, nextState);
  }

  render(){
    return this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.clicked(index)}
          name={ person.name }
          age={ person.age }
          key={ person.id }
          changed={(event) => this.props.changed(event, person.id)}/>
      });
  }
}
export default Persons;

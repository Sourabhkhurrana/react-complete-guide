import React, { Component } from 'react';
import Classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor( props ){
    super(props);
    console.log("[App.js] inside constructor", props);
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
    console.log("[App.js] componentWillMount!!!");
  }

  componentDidMount () {
    console.log("[App.js] componentDidLast ");
  }

  shouldComponentUpdate (nextProp, nextState) {
    console.log("[update App.js] shouldComponentUpdate", nextProp, nextState);
    return true;
  }

  componentWillUpdate (nextProps, nextState){
    console.log("[update App.js] componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate (nextProps, nextState){
    console.log("[update App.js] componentDidUpdate", nextProps, nextState);
  }


  // state = {
  //   Person:[
  //     { id: 'as1', name:"Sourabh", age:24 },
  //     { id: 'as2', name:"Neeraj", age:23 },
  //     { id: 'as3', name:"Mudit", age:27 }
  //   ]
  // }

  switchNameHandeler = (name) => {
    this.setState({
      Person:[
        { name: name, age:24 },
        { name:"Neeraj", age:23 },
        { name:"Mudit", age:29 }
      ],
      showPersons: false,
    })
  }

  nameChangedHandeler = (event, id) => {

    const personIndex = this.state.Person.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.Person[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.Person];
    persons[personIndex] = person;

    this.setState({Person: persons});
    }

  togglePersonHandeler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandeler = (personIndex) => {
    // const person = this.state.Person.slice();
    const person = [...this.state.Person];
    person.splice(personIndex, 1);
    this.setState({Person: person});
  }

  render() {

    console.log(" [App.js] inside render method");

    let persons = null;

    let btnClass = '';

    if( this.state.showPersons ) {
      persons = (
        <div>
          <Persons
            persons={this.state.Person}
            clicked={this.deletePersonHandeler}
            changed={this.nameChangedHandeler}/>
          {/* <Person
              name={ this.state.Person[0].name }
              age={ this.state.Person[0].age }/>
          <Person
              name={ this.state.Person[1].name }
              age={ this.state.Person[1].age }
              changed={this.nameChangedHandeler}>Hello From neeraj</Person>
          <Person
              name={ this.state.Person[2].name }
              age={ this.state.Person[2].age }
              click={this.switchNameHandeler.bind(this,"Ram Gopal verma")}/> */}
        </div>
      );


    }



    return (
        <div className={Classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Person</button>
          <Cockpit
            appTitle={this.props.appTitle}
            showPerson={this.state.showPersons}
            persons={this.state.Person}
            clicked={this.togglePersonHandeler}/>
          {persons}
        </div>
    );
  }
}

export default App;

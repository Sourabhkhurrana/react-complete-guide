import React, { Component } from 'react';
import Classes from './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    Person:[
      { id: 'as1', name:"Sourabh", age:24 },
      { id: 'as2', name:"Neeraj", age:23 },
      { id: 'as3', name:"Mudit", age:27 }
    ]
  }

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

    person.name = event.input.value;

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

    let persons = null;

    let btnClass = '';

    if( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.Person.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandeler(index)}
              name={ person.name }
              age={ person.age }
              key={ person.id }
              changed={(event) => this.nameChangedHandeler(event, person.id)}/>
          })}
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

      btnClass = Classes.red;
    }

    const classes = [];
    if(this.state.Person.length <= 2){
      classes.push(Classes.red);
    }
    if(this.state.Person.length <= 1){
      classes.push(Classes.bold);
    }

    return (
        <div className={Classes.App}>
        <h1>Hi i am react !</h1>
        <p className={classes.join(' ')}>Hello Again paragraph</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandeler}>Switch Name</button>
          {persons}
        </div>
    );
  }
}

export default App;

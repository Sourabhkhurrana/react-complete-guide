import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    Person:[
      { name:"Sourabh", age:24 },
      { name:"Neeraj", age:23 },
      { name:"Mudit", age:27 }
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

  nameChangedHandeler = (event) => {
    this.setState({
      Person:[
        { name: "Sourabh Khurana", age:24 },
        { name: event.target.value, age:23 },
        { name:"Mudit", age:29 }
      ]
    })
  }

  togglePersonHandeler = () => {
    this.setState(showPersons )
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
       <h1>Hi i am react !</h1>
       <p>Hello Again paragraph</p>
       <button 
          style={style}
          onClick={this.togglePersonHandeler}>Switch Name</button>
        {
          this.state.showPersons ? <div>
            <Person 
              name={ this.state.Person[0].name } 
              age={ this.state.Person[0].age }/>
          <Person 
              name={ this.state.Person[1].name } 
              age={ this.state.Person[1].age }
              changed={this.nameChangedHandeler}>Hello From neeraj</Person>
          <Person 
              name={ this.state.Person[2].name } 
              age={ this.state.Person[2].age }
              click={this.switchNameHandeler.bind(this,"Ram Gopal verma")}/>
          </div> : null
        }
        
       
      </div>
    );
  }
}

export default App;

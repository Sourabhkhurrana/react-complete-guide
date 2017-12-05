import React from 'react';
import Classes from './Cockpit.css'
const cockpit = (props) => {
  const classes = [];
  let btnClass = '';
  if(props.showPerson){
    btnClass = Classes.red;
  }
  if(props.persons.length <= 2){
    classes.push(Classes.red);
  }
  if(props.persons.length <= 1){
    classes.push(Classes.bold);
  }
  return (
    <div className={Classes.Cockpit}>
      <h1>Hi i am react !</h1>
      <p className={classes.join(' ')}>Hello Again paragraph</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Switch Name</button>
    </div>
  );
}

export default cockpit;

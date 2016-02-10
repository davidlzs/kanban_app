import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      notes : [
        {
          id: uuid.v4(),
          task: 'Play Javascript'
        },
        {
          id: uuid.v4(),
          task: 'Play NPM'
        },
        {
          id: uuid.v4(),
          task: 'Play React'
        }
      ]
    };
  }
  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button className='add-note' onClick={this.addNote}>+</button>
        <Notes items={notes} />
      </div>
    );
  }
  addNote() {
    console.log("add a note");
  }
}

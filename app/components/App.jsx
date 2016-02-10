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
    this.addNote = this.addNote.bind(this);
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
    this.setState({notes: this.state.notes.concat({
        id: uuid.v4(),
        task: "New Task"
      })
    });
  }
}

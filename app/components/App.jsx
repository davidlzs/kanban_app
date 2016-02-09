import uuid from 'node-uuid';
import React from 'react';
import Note from './Notes.jsx';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn Javascript'
  },
  {
    id: uuid.v4(),
    task: 'Learn NPM'
  },
  {
    id: uuid.v4(),
    task: 'Learn React'
  }
];
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Notes items={notes} />
      </div>
    );
  }
}

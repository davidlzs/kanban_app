import React from 'react';

export default class Note extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.edit = this.edit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.renderNote = this.renderNote.bind(this);
  }
  render() {
    const editing = this.state.editing;
    return  <div>{editing ? this.renderEdit() : this.renderNote()}</div>
  }
  edit() {
    this.setState({
      editing:true
    });
  }
  renderEdit() {
    return <input type="text"
            autoFocus={true}
            defaultValue={this.props.task}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}/>;
  }
  renderNote() {
    const onDelete = this.props.onDelete;
    return  <div onClick={this.edit}><span>{this.props.task}</span>
    {onDelete ? this.renderDelete() : null}
    </div>;
  }
  finishEdit(e) {
    this.props.onEdit(e.target.value);
    this.setState({editing : false});
  }
  checkEnter(e) {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }
  renderDelete() {
    return <button className="delete" onClick={this.props.onDelete}>x</button>
  }
}

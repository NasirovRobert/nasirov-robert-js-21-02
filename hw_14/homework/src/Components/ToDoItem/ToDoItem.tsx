import React from 'react';
import './ToDoItem.css';

interface Props {
  text: string,
  id: number,
  remove: Function
}

export default class ToDoItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.removeToDoItem = this.removeToDoItem.bind(this);
  }

  removeToDoItem() {
    this.props.remove(this.props.id);
  }

  render() {
    return (
      <div className="ToDoItemDiv">
        <p className="ToDoItemP">{this.props.text}</p>
        <button type="button" className="ToDoItemButton" onClick={this.removeToDoItem}>Done</button>
      </div>
    );
  }
}

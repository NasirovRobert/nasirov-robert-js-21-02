import React from 'react';
import './ToDoInput.css';
import WithHover from '../WithHover/WithHover';

interface Props {
  change: Function,
  value: string,
  add: Function
}

export default class ToDoInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.getTextToToDoList = this.getTextToToDoList.bind(this);
  }

  getTextToToDoList(e: any) {
    this.props.change(e.target.value);
  }

  render() {
    return (
      <div className="ToDoInputDiv">
        <textarea value={this.props.value} onChange={this.getTextToToDoList} />
        <WithHover comment="Это Кнопка">
          <div className="buttonDiv">
            <button type="button" onClick={this.props.add} className="ToDoInputButton">Add to the todolist</button>
          </div>
        </WithHover>
      </div>
    );
  }
}

import React from 'react';
import './ToDoList.css';
import ToDoInput from '../ToDoInput/ToDoInput';
import ToDoItem from '../ToDoItem/ToDoItem';
import WithHover from '../WithHover/WithHover';

interface State {
  textArea: string;
  arrToDoFromLS: Array<Object>;
}

let arrToDoFromLS: Array<Object>;
JSON.parse(localStorage.getItem('test'))
  ? arrToDoFromLS = JSON.parse(localStorage.getItem('test')) : arrToDoFromLS = [];

export default class ToDoList extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      arrToDoFromLS,
      textArea: '',
    };
    this.AddToDoItem = this.AddToDoItem.bind(this);
    this.changeTextArea = this.changeTextArea.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  AddToDoItem() {
    if (this.state.textArea) {
      arrToDoFromLS.push({ id: Date.now(), text: this.state.textArea });
      localStorage.setItem('test', JSON.stringify(arrToDoFromLS));
      this.setState({
        arrToDoFromLS,
        textArea: '',
      });
    } else {
      alert('Введите заметку в поле');
    }
  }

  changeTextArea(newText: string) {
    this.setState({
      textArea: newText,
    });
  }

  removeItem(id: number) {
    arrToDoFromLS.forEach((elem, index) => (elem.id === id ? arrToDoFromLS.splice(index, 1) : ''));
    localStorage.setItem('test', JSON.stringify(arrToDoFromLS));
    this.setState({
      arrToDoFromLS,
    });
  }

  render() {
    return (
      <div className="ToDoListDiv">
        <WithHover comment="Это заголовок"><h1>I am a ToDolist</h1></WithHover>
        <WithHover comment="Это ТуДу инпут"><ToDoInput add={this.AddToDoItem} value={this.state.textArea} change={this.changeTextArea} /></WithHover>
        {this.state.arrToDoFromLS[0] ? this.state.arrToDoFromLS.map((item) => <WithHover key={item.id} comment="Это ТуДуЭлемент"><ToDoItem remove={this.removeItem} id={item.id} text={item.text} /></WithHover>) : <p style={{ textAlign: 'center' }}>No ToDo Items</p>}
      </div>
    );
  }
}

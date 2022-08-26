import React from 'react';
import './SelectNumberOfComments.css'

export class SelectNumberOfComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfComments: 0,
    };
    this.changeNumberOfComments = this.changeNumberOfComments.bind(this);
    this.selectNumberOfComments = this.selectNumberOfComments.bind(this);
  }

  changeNumberOfComments(e) {
    this.setState({
      numberOfComments: e.target.value,
    })
  }

  selectNumberOfComments() {
    this.props.selectComments(this.state.numberOfComments);
  }

  render() {
    return <div>
      <input type="text" onChange={this.changeNumberOfComments}/>
      <button onClick={this.selectNumberOfComments}>Select</button>
    </div>
  }
}
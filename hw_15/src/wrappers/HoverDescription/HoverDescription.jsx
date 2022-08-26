import React from 'react';
import './HoverDescription.css';


export default class HoverDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
    this.onMouse = this.onMouse.bind(this);
    this.outMouse = this.outMouse.bind(this);
  }

  onMouse() {
    this.setState({
      hovering: true,
    })
  }

  outMouse() {
    this.setState({
      hovering: false,
    })
  }


  render() {
    return (
      <div className='descriptionDivHover' onMouseOver={this.onMouse} onMouseOut={this.outMouse}>
        {this.state.hovering && <div className='descriptionDiv'>{'id:' + this.props.description}</div>}
        {this.props.children}
      </div>
    );
  }
}
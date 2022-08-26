import React from 'react';
import './WithHover.css';

interface Props {
  children: any,
  comment: string
}

interface State {
  hovering: boolean
}

export default class WithHover extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hovering: false,
    };
    this.onMouse = this.onMouse.bind(this);
    this.outMouse = this.outMouse.bind(this);
  }

  onMouse(e: any) {
    this.setState({
      hovering: true,
    });
    e.stopPropagation();
  }

  outMouse(e: any) {
    this.setState({
      hovering: false,
    });
    e.stopPropagation();
  }

  render() {
    return (
      <div className="withHover-block" onMouseOver={this.onMouse} onMouseOut={this.outMouse}>
        {this.state.hovering && <div className="withHover-hover">{this.props.comment}</div>}
        {this.props.children}
      </div>
    );
  }
}

import React from 'react';
import './Comment.css'
import HoverDescription from "../../wrappers/HoverDescription/HoverDescription";
import {ContextTheme} from '../../Contexts/ContextTheme';

export default class Comment extends React.Component {
  render() {
    return <ContextTheme.Consumer>
      {({theme}) => (
    <div className={theme == 'light' ? 'Comment__div Comment__div_light' : 'Comment__div Comment__div_dark'}>
      <HoverDescription description={this.props.id}>
        <h3 className='Comment__username'>{this.props.user}</h3>
      </HoverDescription>
      <p className='Comment__text'>{this.props.text}</p>
    </div>
      ) }
    </ContextTheme.Consumer>
  }
}
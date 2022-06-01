import React from 'react'
import './Comment.css'



export class Comment extends React.Component {
    render() {
        return <div className='comment'>
            {console.log('hi')}
            <div className='comment__user-name'>{this.props.name}</div>
            <div className="comment__text">{this.props.text}</div>
        </div>
    }
}
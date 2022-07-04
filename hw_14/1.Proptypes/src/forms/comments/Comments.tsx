import React from 'react';
import './Comments.css';
import { Comment } from '../../components/comment/Comment';
import { apiResponse } from '../../api-mock/api';
import { CommentResponse, CommentType } from '../../types/responses';
import LikeCounter from '../../components/LikeCounter/LikeCounter';

interface State {
  commentsResponse: CommentResponse;
  countOfLikes: number;
}

export class Comments extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      commentsResponse: apiResponse,
      countOfLikes: 0,
    };
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  addLike() {
    this.setState({ countOfLikes: this.state.countOfLikes + 1 });
  }

  removeLike() {
    this.setState({ countOfLikes: this.state.countOfLikes - 1 });
  }

  render() {
    return (
      <div className="comment-form">
        {this.state.commentsResponse.status === 'ok'
          ? this.state.commentsResponse.result.map((elem: CommentType, index: number) => (
            <Comment
              name={elem.name}
              text={elem.text}
              key={index}
              addLike={this.addLike}
              removeLike={this.removeLike}
            />
          ))
          : 'При загрузке произошла ошибка'}
        <div>
          Всего лайков:
          {this.state.countOfLikes}
        </div>
        <LikeCounter countOfLikes={this.state.countOfLikes} />
      </div>
    );
  }
}

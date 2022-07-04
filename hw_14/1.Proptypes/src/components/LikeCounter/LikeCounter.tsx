import React from 'react';

interface Props {
  countOfLikes: number;
}

export default class LikeCounter extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        Count of Likes:
        {' '}
        {this.props.countOfLikes}
      </div>
    );
  }
}

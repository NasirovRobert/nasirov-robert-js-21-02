import React, { RefObject } from 'react';
import './Comment.css';

// import PropTypes from 'prop-types'

interface Props {
  name: string;
  text: string;
  addLike: () => void;
  removeLike: () => void;
}

interface State {
  liked: boolean;
  other: string;
}

export class Comment extends React.Component<Props, State> {
  textDiv: RefObject<HTMLDivElement>; // ссылка на элемент

  constructor(props: any) {
    super(props);
    this.state = {
      liked: false,
      other: 'text of state',
    };
    this.changeLike = this.changeLike.bind(this);
    this.textDiv = React.createRef();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changeLike(e: any) {
    // console.log(e);
    // alert(this.textDiv.current.innerHTML);
    !this.state.liked
      ? this.props.addLike()
      : this.props.removeLike();
    // ? this.props.addLike && this.props.addLike()
    // : this.props.removeLike && this.props.removeLike();
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    return (
      <div className="comment">
        <div className="comment__user-name">{this.props.name}</div>
        <div ref={this.textDiv} className={`comment__text ${this.state.liked && 'text-liked'}`}>{this.props.text}</div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
        <p className="likeParagraph" onClick={this.changeLike}>
          {this.state.liked ? 'Лайкос' : 'Не лайк'}
          {this.state.other}
        </p>
      </div>
    );
  }
}

// Comment.propTypes = {
//   name: PropTypes.string, // Назначение типа пропсу
//   text: PropTypes.string,
//   array: PropTypes.array,
//   arrayType: PropTypes.arrayOf(PropTypes.string), // Типизированный массив
//   bool: PropTypes.bool,
//   func: PropTypes.func,
//   num: PropTypes.number,
//   obj: PropTypes.object,
//   reactElem: PropTypes.element, //Экземпляр React-элемента
//   reactClass: PropTypes.elementType, //Экземпляр React-элемента
//   inst: PropTypes.instanceOf(Comment), // Экземпляр конкретного класса,
//   optionalEnum: PropTypes.oneOf(['one', 'two']), // Один из вариантов
//   optionalUnion: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Один из типов
//   struct: PropTypes.shape({
//     name: PropTypes.string,
//     age: PropTypes.number
//   })
// };

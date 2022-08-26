import React from 'react';
import './CommentList.css'
import Comment from "../../Components/Comment/Comment";
import getComments from "../../api/getComments";
import Pagination from "../../Components/Pagination/Pagination";
import {ContextTheme} from '../../Contexts/ContextTheme';
import {SelectNumberOfComments} from "../../Components/SelectNumberOfComments/SelectNumberOfComments";

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.getCommentsToState = this.getCommentsToState.bind(this);
    this.setNumberOfPage = this.setNumberOfPage.bind(this);
    this.setNumberOfComments = this.setNumberOfComments.bind(this);
    this.state = {
      comments: [],
      numberOfComments: 10,
      numberOfPage: 1
    }
  }

  componentDidMount() {
    console.log('componentDidMount + commentList');
    getComments(this.state.numberOfPage, this.state.numberOfComments, this.getCommentsToState)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate + commentList');
  }

  getCommentsToState(data, page, limit, total) {
    this.setState({
      comments: data,
      numberOfPage: page,
      numberOfComments: limit,
      total,
    })
  }

  // getCommentsOnPage(NumberOfPage) {
  //   getComments(NumberOfPage, this.state.numberOfComments, this.getCommentsToState)
  // }

  setNumberOfPage(numberOfPage) {
    getComments(numberOfPage, this.state.numberOfComments, this.getCommentsToState)
  }

  setNumberOfComments(numberOfComments) {
    getComments(this.state.numberOfPage, numberOfComments, this.getCommentsToState)
  }

  render() {
    console.log('render + commentList');
    return <ContextTheme.Consumer>
      {({theme}) => (
        <div
          className={theme == 'light' ? 'CommentList__div CommentList__div_light' : 'CommentList__div CommentList__div_dark'}>
          {this.state.comments && this.state.comments.map((elem) => <Comment key={elem.id} text={elem.message}
                                                                             id={elem.id}
                                                                             user={elem.owner.firstName + ' ' + elem.owner.lastName}/>)}
          <Pagination gopage={this.setNumberOfPage} page={this.state.numberOfPage} limit={this.state.numberOfComments}
                      total={this.state.total}/>
          <SelectNumberOfComments selectComments={this.setNumberOfComments}/>
        </div>
      )}
    </ContextTheme.Consumer>
  }
}
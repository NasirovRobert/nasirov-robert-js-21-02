import React from 'react';
import './Pagination.css'


export default class Pagination extends React.Component {
  constructor(props) {
    super(props)
  }

  showPagination(page) {
    let paginationArray = [];
    for (let i = -4; i < 5; i++) {
      if (!(((page + i) < 1) || ((page + i) > Math.ceil(((this.props.total - this.props.limit) / this.props.limit))))) {
        if (i === 0) {
          paginationArray.push(<p key={page + i}
                                  className='pagination__p_active'>{page + i}</p>)
        } else {
          paginationArray.push(<p onClick={() => this.props.goPage(page + i)} key={page + i}
                                  className='pagination__p'>{page + i}</p>)
        }
      }
    }
    return paginationArray;
  }

  render() {
    return <div className='pagination__div'>
      {this.props.page && this.showPagination(this.props.page)}
    </div>
  }
}

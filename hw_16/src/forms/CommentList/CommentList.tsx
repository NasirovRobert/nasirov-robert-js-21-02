import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import './CommentList.css';
import Comment from '../../Components/Comment/Comment';
import Pagination from '../../Components/Pagination/Pagination';
import { ContextTheme } from '../../Contexts/ContextTheme';
import { SelectNumberOfComments } from '../../Components/SelectNumberOfComments/SelectNumberOfComments';
import { getComments } from '../../api/getComments';

interface ElemInterface {
  id: string;
  message: string;
  owner: any;

}

function CommentList() {
  const [comments, setComments] = useState([]);
  const [numberOfComments, setNumberOfComments] = useState(10);
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [total, setTotal] = useState<number>(0);

  function getCommentsToState(newData: any, newPage: number, newLimit: number, newTotal: number) {
    setComments(newData);
    setNumberOfComments(newLimit);
    setNumberOfPage(newPage);
    setTotal(newTotal);
  }

  const setNumberOfPageFunc = useCallback((newNumberOfPage: number) => {
    getComments(newNumberOfPage, numberOfComments, getCommentsToState);
  }, [numberOfComments]);

  const setNumberOfCommentsFunc = useCallback((newNumberOfComments: number) => {
    getComments(numberOfPage, newNumberOfComments, getCommentsToState);
  }, [numberOfPage]);

  const theme = useContext(ContextTheme);

  useEffect(() => {
    getComments(numberOfPage, numberOfComments, getCommentsToState);
  }, []);

  function initialTheme(): string {
    if (theme.theme === 'light') return 'CommentList__div CommentList__div_light';
    if (theme.theme === 'dark') return 'CommentList__div CommentList__div_dark';
    return '';
  }

  return (
    <div className={initialTheme()}>
      {comments && comments.map((elem: ElemInterface) => (
        <Comment
          key={elem.id}
          text={elem.message}
          id={elem.id}
          user={`${elem.owner.firstName} ${elem.owner.lastName}`}
        />
      ))}
      <Pagination
        goPage={setNumberOfPageFunc}
        page={numberOfPage}
        limit={numberOfComments}
        total={total}
      />
      <SelectNumberOfComments selectComments={setNumberOfCommentsFunc} />
    </div>
  );
}

export default CommentList;

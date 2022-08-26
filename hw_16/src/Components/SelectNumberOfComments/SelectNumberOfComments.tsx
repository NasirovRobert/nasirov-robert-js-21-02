import React, { useState } from 'react';
import './SelectNumberOfComments.css';

export function SelectNumberOfComments(props: { selectComments: Function }) {
  const [numberOfComments, setNumberOfComments] = useState(0);
  function changeNumberOfComments(e: React.ChangeEvent<HTMLInputElement>) {
    setNumberOfComments(+e.target.value);
  }

  function selectNumberOfComments() {
    props.selectComments(numberOfComments);
  }

  return (
    <div>
      <input type="text" onChange={changeNumberOfComments} />
      <button type="button" onClick={selectNumberOfComments}>Select</button>
    </div>
  );
}

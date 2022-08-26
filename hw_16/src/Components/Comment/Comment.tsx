import React, { useContext } from 'react';
import './Comment.css';
import HoverDescription from '../../wrappers/HoverDescription/HoverDescription';
import { ContextTheme } from '../../Contexts/ContextTheme';

interface Props {
  text: string,
  user: string,
  id: string
}

export default function Comment(props: Props) {
  const { theme } = useContext(ContextTheme);
  return (
    <div className={theme === 'light' ? 'Comment__div Comment__div_light' : 'Comment__div Comment__div_dark'}>
      <HoverDescription description={props.id}>
        <h3 className="Comment__username">{props.user}</h3>
      </HoverDescription>
      <p className="Comment__text">{props.text}</p>
    </div>
  );
}

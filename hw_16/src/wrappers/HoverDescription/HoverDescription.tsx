import React, { useState } from 'react';
import './HoverDescription.css';

interface Props {
  description: string,
  children: React.ReactNode
}

export default function HoverDescription(props: Props) {
  const [hovering, toggleHovering] = useState<boolean>();

  function onMouse() {
    toggleHovering(true);
  }

  function outMouse() {
    toggleHovering(false);
  }

  return (
    <div className="descriptionDivHover" onMouseOver={onMouse} onMouseOut={outMouse}>
      <div className={`descriptionDiv ${hovering === true ? 'descriptionDivOn' : ''}
      ${hovering === false ? 'descriptionDivOff' : ''}`}
      >
        {`id:${props.description}`}
      </div>
      {props.children}
    </div>
  );
}

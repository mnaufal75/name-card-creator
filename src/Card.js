import React from 'react';
import './Card.css';

import { useDrag } from 'react-dnd';

const Card = ({ keyProp, title, onClick }) => {
  const [{}, drag] = useDrag({
    item: { name: keyProp,  type: 'card' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        onClick(item)
      }
    }
  })

  const click = () => {
    return onClick();
  }

  return <div key={keyProp} ref={drag} className="card" onClick={click}>{title}</div>
}

export default Card;

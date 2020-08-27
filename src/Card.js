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

  return <div key={keyProp} ref={drag} className="card" onClick={onClick}>{title}</div>
}

export default Card;

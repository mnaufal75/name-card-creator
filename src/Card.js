import React from 'react';
import './Card.css';
import { useDrag } from 'react-dnd';

const Card = ({ keyProp, title, onClick }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name: keyProp,  type: 'card' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`)
        onClick(item)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const click = () => {
    return onClick();
  }

  return <div key={keyProp} ref={drag} className="card" onClick={click}>{title}</div>
}

export default Card;

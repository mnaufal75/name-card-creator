import React from 'react';
import './EmptyContent.css';
import { useDrop } from 'react-dnd';

const EmptyContent = (props) => {
  const first = {
    width: 'calc(90% - 400px)',
    height: '300px',
    left: "10%",
    margin: '100px 200px',
    textAlign: 'center',
    lineHeight: '300px',
    boxsizing: 'border-box',
    padding: 0,
    transition: '0.5s'
  }
  const second = {
    width: 'calc(80% - 400px)',
    height: '200px',
    left: "20%",
    margin: '100px 200px',
    transition: '0.5s'
  }

  const isLeft = props.leftMenu;

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'card',
    drop: () => ({ name:  'Kotak'}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  })
  const isActive = canDrop && isOver

  if (!isLeft) {
    return (
      <div style={first} className="content">
        <h3 style={{margin: 0}}>Choose Template</h3>
      </div>
    )
  } else {
    return (
      <div ref={drop} style={second} className="content">
        {isActive ? '' : ''}
      </div>
    )
  }
}

export default EmptyContent;

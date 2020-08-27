import React from 'react';
import './EmptyContent.css';
import { useDrop } from 'react-dnd';

const EmptyContent = (props) => {
  const first = {
    width: 'calc(90% - 500px)',
    height: '250px',
    left: "10%",
    margin: '100px 250px',
    textAlign: 'center',
    lineHeight: '250px',
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

  const [{}, drop] = useDrop({
    accept: 'card'
  })

  if (!isLeft) {
    return (
      <div style={first} className="content">
        <h3 style={{margin: 0}}>Choose Template</h3>
      </div>
    )
  } else {
    return (
      <div ref={drop} style={second} className="content">
      </div>
    )
  }
}

export default EmptyContent;

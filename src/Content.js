import React from 'react';
import './Content.css';
import { useDrop } from 'react-dnd';

const Content = (props) => {
  const { title, firstName, lastName, yourCity, name, company, role, phoneNumber } = props.data;
  const isLeft = props.leftMenu;

  const show = {
    width: 'calc(60% - 40px)',
    left: "20%"
  }
  const notShow = {
    width: 'calc(70% - 100px)',
    left: "10%",
    margin: '100px 50px',
  }

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'card',
    drop: () => ({ name:  'Kotak'}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  })
  const isActive = canDrop && isOver

  if (title === 'Card A') {
    return (
      <div ref={drop} style={isLeft ? show : notShow} className="content">
        <h3>CARD A</h3>
        <br />
        <h4>First Name: {firstName}</h4>
        <h4>Last Name: {lastName}</h4>
        <h4>Your City: {yourCity}</h4>
      </div>
    );
  } else if (title === 'Card B') {
    return (
      <div ref={drop} style={isLeft ? show : notShow} className="content">
        <h3>CARD B</h3>
        <br />
        <h4>Name: {name}</h4>
        <h4>Company: {company}</h4>
        <h4>Role: {role}</h4>
        <h4>Phone Number: {phoneNumber}</h4>
      </div>
    );
  }
}

export default Content;

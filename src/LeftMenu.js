import React from 'react';
import './LeftMenu.css';

const Menu = (props) => {
  const sendData = (key) => {
    console.log(key);
    return props.parentCallback(key);
  }

  const closeMenu = () => {
    return props.parentCallback2();
  }

  const data = props.data;
  const listCard = Object.keys(data).map((key) =>
    <li key={key} onClick={() => sendData(key)} >{data[key].title}</li>
  );

  return (
    <div className="leftMenu">
      <ul>{listCard}</ul>

      <img alt="closeButton" className="closeButton" src="close" onClick={closeMenu} />
    </div>
  );
}

export default Menu;

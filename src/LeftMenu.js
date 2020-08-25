import React from 'react';
import './LeftMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

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

      <FontAwesomeIcon className="closeButton" icon={faCaretLeft} size="2x" onClick={closeMenu} />
    </div>
  );
}

export default Menu;

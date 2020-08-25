import React from 'react';
import Card from './Card';
import './LeftMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const Menu = (props) => {
  const sendData = (key) => {
    return props.parentCallback(key);
  }

  const closeMenu = () => {
    return props.parentCallback2();
  }

  const data = props.data;
  const listCard = Object.keys(data).map((key) =>
    // <li ref={drag} key={key} onClick={() => sendData(key)} >{data[key].title}</li>
    <Card keyProp={key} onClick={() => sendData(key)} title={data[key].title} />
  );

  return (
    <div className="leftMenu">
      {listCard}

      <FontAwesomeIcon className="closeButton" icon={faCaretLeft} size="2x" onClick={closeMenu} />
    </div>
  );
}

export default Menu;

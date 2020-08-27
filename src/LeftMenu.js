import React from 'react';
import Card from './Card';
import './LeftMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const Menu = ({ data, parentCallback, parentCallback2 }) => {
  const sendData = (key) => {
    return parentCallback(key);
  }

  const closeMenu = () => {
    return parentCallback2();
  }

  const listCard = Object.keys(data).map((key) =>
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

import React from 'react';
import Card from './Card';
import './LeftMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const Menu = ({ data, onClickCard, onClickButton }) => {
  const listCard = Object.keys(data).map((key) =>
    <Card key={key} keyProp={key} onClick={() => onClickCard(key)} title={data[key].title} />
  );

  return (
    <div className="leftMenu">
      {listCard}

      <FontAwesomeIcon className="closeButton" icon={faCaretLeft} size="2x" onClick={onClickButton} />
    </div>
  );
}

export default Menu;

import React, { Component } from 'react';
import './LeftMenu.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.sendData = this.sendData.bind(this);
  }

  sendData(data) {
    return this.props.parentCallback(data);
  }

  render() {
    const data = this.props.data;
    const listCard = data.map((card) =>
      <li onClick={() => this.sendData(card)} >{card.title}</li>
    );

    return (
      <div className="Menu">
        <ul>{listCard}</ul>
      </div>
    );
  }
}

export default Menu;

import React, { Component } from 'react';
import './LeftMenu.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.sendData = this.sendData.bind(this);
  }

  sendData(key) {
    console.log(key);
    return this.props.parentCallback(key);
  }

  render() {
    const data = this.props.data;
    const listCard = Object.keys(data).map((key) =>
      <li key={key} onClick={() => this.sendData(key)} >{data[key].title}</li>
    );

    return (
      <div className="leftMenu">
        <ul>{listCard}</ul>
      </div>
    );
  }
}

export default Menu;

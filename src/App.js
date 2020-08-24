import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import Content from './Content';
import RightMenu from './RightMenu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {
        cardA: {
          show: false,
          title: 'Card A',
          firstName: '',
          lastName: '',
          yourCity: ''
        },
        cardB: {
          show: false,
          title: 'Card B',
          name: '',
          company: '',
          role: '',
          phoneNumber: ''
        }
      },

      leftMenu: false,
      key: "",
    }

    this.showMenu = this.showMenu.bind(this);
    this.leftMenuCallback = this.leftMenuCallback.bind(this);
    this.rightMenuCallback = this.rightMenuCallback.bind(this);
  }

  showMenu() {
    this.setState({ leftMenu: !this.state.leftMenu });
  }

  leftMenuCallback(key) {
    console.log("left ", key);

    if (key === 'cardA') {
      this.setState({ key: key });
    } else if (key === 'cardB') {
      this.setState({ key: key });
    }
  }

  rightMenuCallback(key, data) {
    console.log("right ", key);

    const newCard = this.state.card;
    newCard[key] = data;

    this.setState({ key: key, card: newCard });
  }

  render() {
    const { card, key } = this.state;

    return (
      <div className="component-app">
        <h3>Header</h3>
        <img alt="plusButton" className="plusButton" src="plus" onClick={this.showMenu} />
        {this.state.leftMenu && <LeftMenu data={card} parentCallback={this.leftMenuCallback} parentCallback2={this.showMenu} />}
        {key && <Content data={card[key]} keyProp={key} />}
        {key && <RightMenu data={card[key]} keyProp={key} parentCallback={this.rightMenuCallback} />}
      </div>
    );
  }
}

export default App;

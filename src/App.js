import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import Content from './Content';
import RightMenu from './RightMenu';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: [
        {
          show: false,
          title: 'Card A',
          firstName: '',
          lastName: '',
          yourCity: ''
        },
        {
          show: false,
          title: 'Card B',
          name: '',
          company: '',
          role: '',
          phoneNumber: ''
        }
      ],
      choose: null,
      leftMenu: false,
      rightMenu: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.callback = this.callback.bind(this);
  }

  showMenu() {
    this.setState({ leftMenu: !this.state.leftMenu });
    console.log(this.state.leftMenu);
  }

  callback(data) {
    console.log(data);
    this.setState({ choose: data });
  }

  render() {
    return (
      <div className="component-app">
        <div className="Card">
          <h3>Header</h3>
          <img alt="plusButton" className="plusButton" src="plus" onClick={this.showMenu} />
          {this.state.leftMenu && <LeftMenu data={this.state.card} parentCallback={this.callback} />}
          <Content />
          {this.state.choose && <RightMenu data={this.state.choose} />}
        </div>
      </div>
    );
  }
}

export default App;

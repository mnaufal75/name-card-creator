import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import EmptyContent from './EmptyContent';
import Content from './Content';
import RightMenu from './RightMenu';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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

    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleClickCard = this.handleClickCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickButton() {
    this.setState({ leftMenu: !this.state.leftMenu });
  }

  handleClickCard(key) {
    if (key === 'cardA') {
      this.setState({ key: key });
    } else if (key === 'cardB') {
      this.setState({ key: key });
    }
  }

  handleChange(key, data) {
    const newCard = this.state.card;
    newCard[key] = data;

    this.setState({ key: key, card: newCard });
  }

  render() {
    const { card, key, leftMenu } = this.state;

    return (
      <div className="component-app">
        <DndProvider backend={HTML5Backend}>
          <header>
            <h3>Header</h3>
          </header>

          <div className="left">
            {!leftMenu && <FontAwesomeIcon className="plusButton" icon={faPlusCircle} size="4x" onClick={this.handleClickButton} />}
          </div>
          {/* {leftMenu && <LeftMenu data={card} parentCallback={this.leftMenuCallback} parentCallback2={this.showMenu} /> } */}
          {leftMenu && <LeftMenu data={card} onClickCard={this.handleClickCard} onClickButton={this.handleClickButton} /> }

          {!key && <EmptyContent leftMenu={leftMenu} />}

          {key && <Content data={card[key]} keyProp={key} leftMenu={leftMenu} />}
          {key && <RightMenu data={card[key]} keyProp={key} onChange={this.handleChange} />}
        </DndProvider>
      </div>
    );
  }
}

export default App;

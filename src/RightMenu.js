import React, { Component } from 'react';

class RightMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const prop = this.props.data;

    if (prop.title === 'Card A') {
      return (
        <form className="rightMenu">
          <h3>{prop.title}</h3>
          <label>
            First Name
            <input type="text" name="firstName" />
          </label>
          <label>
            Last Name
            <input type="text" name="lastName" />
          </label>
          <label>
            Your City
            <input type="text" name="yourCity" />
          </label>
        </form>
      );
    } else if (prop.title === 'Card B') {
      return (
        <form className="rightMenu">
          <h3>{prop.title}</h3>
          <label>
            Name
            <input type="text" name="name" />
          </label>
          <label>
            Company
            <input type="text" name="company" />
          </label>
          <label>
            Role
            <input type="text" name="role" />
          </label>
          <label>
            Phone Number
            <input type="text" name="phoneNumber" />
          </label>
        </form>
      );
    }

  }
}

export default RightMenu;

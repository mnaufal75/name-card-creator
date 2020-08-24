import React, { Component } from 'react';

class RightMenu extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    console.log(event.target.name + ' ' + event.target.value);

    const data = this.props.data;
    const key = this.props.keyProp;
    data[name] = event.target.value;

    console.log(data);
    console.log(key);

    return this.props.parentCallback(key, data);
  }

  render() {
    const { title, firstName, lastName, yourCity, name, company, role, phoneNumber } = this.props.data;

    if (title === 'Card A') {
      return (
        <form className="rightMenu">
          <h3>{title}</h3>
          <label>
            First Name
            <input type="text" name="firstName" onChange={this.handleChange} value={firstName || ''} />
          </label>
          <label>
            Last Name
            <input type="text" name="lastName" onChange={this.handleChange} value={lastName || ''} />
          </label>
          <label>
            Your City
            <input type="text" name="yourCity" onChange={this.handleChange} value={yourCity || ''} />
          </label>
        </form>
      );
    } else if (title === 'Card B') {
      return (
        <form className="rightMenu">
          <h3>{title}</h3>
          <label>
            Name
            <input type="text" name="name" onChange={this.handleChange} value={name || ''} />
          </label>
          <label>
            Company
            <input type="text" name="company" onChange={this.handleChange} value={company || ''} />
          </label>
          <label>
            Role
            <input type="text" name="role" onChange={this.handleChange} value={role || ''} />
          </label>
          <label>
            Phone Number
            <input type="text" name="phoneNumber" onChange={this.handleChange} value={phoneNumber || ''} />
          </label>
        </form>
      );
    }

  }
}

export default RightMenu;

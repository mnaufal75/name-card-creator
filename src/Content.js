import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, firstName, lastName, yourCity, name, company, role, phoneNumber } = this.props.data;

    if (title === 'Card A') {
      return (
        <div className="content">
          <h3>{title}</h3>
          <h4>First Name: {firstName}</h4>
          <h4>Last Name: {lastName}</h4>
          <h4>Your City: {yourCity}</h4>
        </div>
      );
    } else if (title === 'Card B') {
      return (
        <div className="content">
          <h3>{title}</h3>
          <h4>Name: {name}</h4>
          <h4>Company: {company}</h4>
          <h4>Role: {role}</h4>
          <h4>Phone Number: {phoneNumber}</h4>
        </div>
      );
    }
  }
}

export default Content;

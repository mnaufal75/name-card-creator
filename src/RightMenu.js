import React, { Component } from 'react';
import './RightMenu.css';

const RightMenu = (props) => {
  const handleChange = (event) => {
    const name = event.target.name;
    console.log(event.target.name + ' ' + event.target.value);

    const data = props.data;
    const key = props.keyProp;
    data[name] = event.target.value;

    console.log(data);
    console.log(key);

    return props.parentCallback(key, data);
  }

  const { title, firstName, lastName, yourCity, name, company, role, phoneNumber } = props.data;

  if (title === 'Card A') {
    return (
      <div className="rightMenu">
      <form>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={handleChange} value={firstName || ''} />
        <label> Last Name</label>
        <input type="text" name="lastName" onChange={handleChange} value={lastName || ''} />
        <label>Your City</label>
        <input type="text" name="yourCity" onChange={handleChange} value={yourCity || ''} />
      </form>
      </div>
    );
  } else if (title === 'Card B') {
    return (
      <div>
      <form className="rightMenu">
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} value={name || ''} />
        <label>Company</label>
        <input type="text" name="company" onChange={handleChange} value={company || ''} />
        <label>Role</label>
        <input type="text" name="role" onChange={handleChange} value={role || ''} />
        <label>Phone Number</label>
        <input type="text" name="phoneNumber" onChange={handleChange} value={phoneNumber || ''} />
      </form>
      </div>
    );
  }
}

export default RightMenu;

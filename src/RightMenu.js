import React, { Component } from 'react';

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
      <form className="rightMenu">
        <h3>{title}</h3>
        <label>
          First Name
          <input type="text" name="firstName" onChange={handleChange} value={firstName || ''} />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" onChange={handleChange} value={lastName || ''} />
        </label>
        <label>
          Your City
          <input type="text" name="yourCity" onChange={handleChange} value={yourCity || ''} />
        </label>
      </form>
    );
  } else if (title === 'Card B') {
    return (
      <form className="rightMenu">
        <h3>{title}</h3>
        <label>
          Name
          <input type="text" name="name" onChange={handleChange} value={name || ''} />
        </label>
        <label>
          Company
          <input type="text" name="company" onChange={handleChange} value={company || ''} />
        </label>
        <label>
          Role
          <input type="text" name="role" onChange={handleChange} value={role || ''} />
        </label>
        <label>
          Phone Number
          <input type="text" name="phoneNumber" onChange={handleChange} value={phoneNumber || ''} />
        </label>
      </form>
    );
  }
}

export default RightMenu;

import React from 'react';
import './RightMenu.css';

const RightMenu = ({ data, keyProp, parentCallback }) => {
  const { title, firstName, lastName, yourCity, name, company, role, phoneNumber } = data;

  const handleChange = (event) => {
    const name = event.target.name;
    const newData = data;
    newData[name] = event.target.value;

    return parentCallback(keyProp, newData);
  }

  if (title === 'Card A') {
    return (
      <div className="rightMenu">
      <form>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={handleChange} value={firstName || ''} placeholder="Your Name ..." />
        <label> Last Name</label>
        <input type="text" name="lastName" onChange={handleChange} value={lastName || ''}  placeholder="Your Last Name ..."/>
        <label>Your City</label>
        <input type="text" name="yourCity" onChange={handleChange} value={yourCity || ''} placeholder="Your City ..." />
      </form>
      </div>
    );
  } else if (title === 'Card B') {
    return (
      <div className="rightMenu">
      <form>
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} value={name || ''} placeholder="Name ..." />
        <label>Company</label>
        <input type="text" name="company" onChange={handleChange} value={company || ''} placeholder="Company ..." />
        <label>Role</label>
        <input type="text" name="role" onChange={handleChange} value={role || ''} placeholder="Role ..." />
        <label>Phone Number</label>
        <input type="text" name="phoneNumber" onChange={handleChange} value={phoneNumber || ''} placeholder="Phone Number ..." />
      </form>
      </div>
    );
  }
}

export default RightMenu;


import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ toggle, onPress }) => (
  <div className={toggle ? 'avatar__drop -active' : 'avatar__drop'}>
    <ul>
      <li>
        <button onClick={onPress} className="item__style"><span>Hide Menu</span></button>
      </li>
    </ul>
  </div>
);

Dropdown.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Dropdown;

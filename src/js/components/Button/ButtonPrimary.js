import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ text, onPress }) => (
  <button onClick={onPress} className={'button__raised light'}>
    {text}
  </button>
);

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ButtonPrimary;

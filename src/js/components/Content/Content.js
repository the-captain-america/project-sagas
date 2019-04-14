import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ content }) => (
  <div className="content">
    <div className="icon">
      <i className={`fa ${content.icon}`} aria-hidden="true" />
    </div>
    <h1>{content.title}</h1>
    <p>{content.question}</p>
  </div>
);

Content.propTypes = {
  content: PropTypes.object.isRequired,
};

export default Content;

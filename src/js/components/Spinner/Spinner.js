import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ color, width }) => {
  const keyframes = [
    `@keyframes spinOuter {
      to { transform: rotate(360deg); }
    }`,
    `@keyframes spinInner {
      0%  { transform: rotate(0deg); }
      12.5% { transform: rotate(135deg); }
      25%   { transform: rotate(270deg); }
      37.5% { transform: rotate(405deg); }
      50%   { transform: rotate(540deg); }
      62.5% { transform: rotate(675deg); }
      75%   { transform: rotate(810deg); }
      87.5% { transform: rotate(945deg); }
      100%  { transform: rotate(1080deg); }
    }`,
    `@keyframes drawLeft {
      0%, 100% { transform: rotate(130deg); }
      50% { transform: rotate(5deg); }
    }`,
    `@keyframes drawRight {
      0%, 100% { transform: rotate(-130deg); }
      50% { transform: rotate(5deg); }
    }`,
  ];

  let styleSheet = document.styleSheets[0];
  keyframes.forEach((rule) => {
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  });

  const outerWrapperStyles = {
    height: width,
    width,
    display: 'inline-block',
    animation: 'spinOuter 1.35s linear infinite'
  };
  
  const innerWrapperStyles = {
    height: '100%',
    width: '100%',
    display: 'flex',
    animation: 'spinInner 5.4s cubic-bezier(0.4, 0, 0.2, 1) infinite'
  };
  
  const halfParentStyles = {
    flexGrow: '1',
    position: 'relative',
    overflow: 'hidden',
  };
  
  const leftHalfParentStyles = Object.assign({}, halfParentStyles, {
    transformOrigin: 'center right',
  });
  
  const rightHalfParentStyles = Object.assign({}, halfParentStyles, {
    transformOrigin: 'center left',
  });
  
  const halfChildStyles = {
    height: '100%',
    width: '200%',
    position: 'absolute',
    boxSizing: 'border-box',
    border: `calc(${width} / 5) solid ${color}`,
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    animationDuration: '1.35s',
    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    animationIterationCount: 'infinite',
  };
  
  const leftHalfChildStyles = Object.assign({}, halfChildStyles, {
    borderRightColor: 'transparent',
    transform: 'rotate(130deg)',
    animationName: 'drawLeft'
  });
  
  const rightHalfChildStyles = Object.assign({}, halfChildStyles, {
    right: 0,
    borderLeftColor: 'transparent',
    transform: 'rotate(-130deg)',
    animationName: 'drawRight',
  });
  
  return (
    <div style={outerWrapperStyles}>
      <div style={innerWrapperStyles}>
        <div style={leftHalfParentStyles}>
          <div style={leftHalfChildStyles} />
        </div>
        <div style={rightHalfParentStyles}>
          <div style={rightHalfChildStyles} />
        </div>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Spinner;

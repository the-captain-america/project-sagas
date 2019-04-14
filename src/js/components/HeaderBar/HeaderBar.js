import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.onPressSettings = this.onPressSettings.bind(this);
  }

  onPressSettings() {
    if (!this.state.toggle) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.onPressSettings();
  }

  render() {
    const { visible } = this.props;
    const styleHide = {
      display: 'none',
    };
    const styleShow = {
      display: 'block',
    };

    return (
      <div>
        <header style={visible ? styleShow : styleHide}>
          <button
            style={{ display: 'none' }}
            ref={(node) => { this.node = node; }}
            className="menu"
            onClick={this.onPressSettings}
          >
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
          <button className="secret" onClick={this.props.onSecret}>Secret</button>
        </header>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  visible: PropTypes.bool.isRequired,
  onPressItem: PropTypes.func.isRequired,
  tracker: PropTypes.number.isRequired,
  onSecret: PropTypes.func.isRequired,
};

export default HeaderBar;

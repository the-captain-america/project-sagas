import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Spinner from 'components';
import viewActions from 'actions';
import HeaderBar from 'components';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onPressItem = this.onPressItem.bind(this);
    this.onSecret = this.onSecret.bind(this);
  }

  componentDidMount() {
    this.props.getView();
    console.log(this.props.view);
  }

  onPressItem() {
    this.setState({ visible: !this.state.visible });
  }

  onSecret() {
    $(window).keydown((e) => {
      if (e.ctrlKey && e.altKey) {
        console.log('shhh its a secret!');
      }
    });
  }

  renderLoad() {
    return <Spinner />;
  }

  render() {
    const { visible } = this.state;
    const className = `content__push${visible ? ' content__push --active' : ''}`;
    return (
      <div>
        <HeaderBar
          onSecret={this.onSecret}
          onPressItem={this.onPressItem}
          visible={visible}
        />
        <div className={`${className} container`}>
          {this.props.loading ? this.renderLoad() : ''}
          {this.renderPage()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.view.loading,
  view: state.view,
});

const mapDispatchToProps = dispatch => ({
  getView: () => dispatch(viewActions.getView()),
});

AppContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const ConnectAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);

export default ConnectAppContainer;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { viewActions } from 'actions';

const checkbox = {
  false: 'No',
  true: 'Yes',
};

class ViewContainer extends Component {
  componentDidMount() {
    const param = this.props.match.params.id;
    console.log('params', param);
  }

  // updateCheck(e, value, name) {
  //   const param = this.props.match.params.id;
  //   const checkValue = value ? 'reviewed' : 'pending';
  //   this.props.setStatus({ param, status: { [name]: checkValue } });
  // }

  render() {
    const { view } = this.props;
    return (
      <div className="container view">
        <div className="row">
          <div className="col-xs-6 col-md-6">
            <div className="view__checkbox">
              Select goes here
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // view: state.view,
});

const mapDispatchToProps = dispatch => ({
  // setStatus: data => dispatch(statusActions.setStatus(data)),
});

ViewContainer.propTypes = {
  match: PropTypes.object.isRequired,
  //iew: PropTypes.object.isRequired,
  // getView: PropTypes.func.isRequired,
};

const ConnectViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewContainer);

export default ConnectViewContainer;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setAllRegistration,
  setDisableBalanceOnEdit,
  setDisableBalanceOnAdd
} from '../../store/actions/settingsAction';

class Settings extends Component {
  disableBalanceOnAddChange = e => {
    const { setDisableBalanceOnAdd } = this.props;

    setDisableBalanceOnAdd();
  };

  disableBalanceOnEditChange = e => {
    const { setDisableBalanceOnEdit } = this.props;

    setDisableBalanceOnEdit();
  };

  allowRegistrationChange = e => {
    const { setAllRegistration } = this.props;

    setAllRegistration();
  };

  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration
    } = this.props.settings;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link text-success">
              <i className="fas fa-arrow-circle-left" /> Back
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Allow Registration</label>
                <input
                  type="radio"
                  className="form-check form-check-inline ml-4"
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance on Add</label>
                <input
                  type="radio"
                  className="form-check form-check-inline ml-4"
                  name="disableBalanceOnAdd"
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBalanceOnAddChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance on Edit</label>
                <input
                  type="radio"
                  className="form-check form-check-inline ml-4"
                  name="disableBalanceOnEdit"
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBalanceOnEditChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  firebase: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllRegistration: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  { setAllRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);

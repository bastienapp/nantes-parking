/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Parking.css';

class Parking extends Component {
  render() {
    const {
      idobj: id,
      grp_nom: name,
      grp_statut: status,
      grp_disponible: available,
    } = this.props;
    return (
      <div className="Parking">
        <span>{id}</span>
        <span>{name}</span>
        <span>{status === 5 ? 'Open' : 'Closed'}</span>
        <span>{available}</span>
      </div>
    );
  }
}

Parking.propTypes = {
  idobj: PropTypes.string.isRequired,
  grp_nom: PropTypes.string.isRequired,
  grp_statut: PropTypes.number.isRequired,
  grp_disponible: PropTypes.number.isRequired,
};

export default Parking;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ParkingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      id: null,
    };
  }

  render() {
    const {
      idobj: id,
      grp_nom: name,
      grp_statut: status,
      grp_disponible: available,
      grp_horodatage: horodatage,
      location,
    } = this.props;
    return (
      <div className="ParkingCard">
        <div>{id}</div>
        <div>{name}</div>
        <div>{status === 5 ? <strong>Open</strong> : <em>Closed</em>}</div>
        <div>{available}</div>
        <div>{horodatage}</div>
        <div>
          latitude:
          {location[0]}
        </div>
        <div>
          longitude:
          {location[1]}
        </div>
      </div>
    );
  }
}

ParkingCard.propTypes = {
  idobj: PropTypes.string.isRequired,
  grp_nom: PropTypes.string.isRequired,
  grp_statut: PropTypes.number.isRequired,
  grp_disponible: PropTypes.number.isRequired,
  grp_horodatage: PropTypes.string.isRequired,
  location: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ParkingCard;

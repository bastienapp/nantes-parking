/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import Parking from './Parking';

class ParkingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingList: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?rows=1000&dataset=244400404_parkings-publics-nantes-disponibilites&q=&facet=grp_nom&facet=grp_statut&apikey=0e4e5e7a2c716d20f74343b2f4523f1b026cfe4629c27bd06acfd859',
      )
      .then((response) => {
        this.setState({
          parkingList: response.data.records,
        });
      });
  }

  render() {
    const { parkingList } = this.state;
    return (
      <div className="ParkingList">
        <ul>
          {parkingList.map((parking) => {
            return (
              <li key={parking.fields.idobj}>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Parking {...parking.fields} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ParkingList;

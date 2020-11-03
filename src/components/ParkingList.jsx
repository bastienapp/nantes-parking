/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import ParkingItem from './ParkingItem';

class ParkingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingList: [],
      enoughSpace: null,
    };
    this.showOpen = this.showOpen.bind(this);
    this.showClosed = this.showClosed.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    this.fetchDatas();
  }

  fetchDatas() {
    axios
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/', {
        params: {
          dataset: '244400404_parkings-publics-nantes-disponibilites',
          apikey: '0e4e5e7a2c716d20f74343b2f4523f1b026cfe4629c27bd06acfd859',
          rows: 100,
        },
      })
      .then((response) => {
        this.setState({
          parkingList: response.data.records,
        });
      });
  }

  showOpen() {
    this.setState({
      enoughSpace: true,
    });
  }

  showClosed() {
    this.setState({
      enoughSpace: false,
    });
  }

  showAll() {
    this.setState({
      enoughSpace: null,
    });
  }

  render() {
    const { parkingList, enoughSpace } = this.state;
    return (
      <div className="ParkingList">
        <button type="button" onClick={this.showOpen}>
          {'Show > 100'}
        </button>
        <button type="button" onClick={this.showClosed}>
          {'Show <= 100'}
        </button>
        <button type="button" onClick={this.showAll}>
          Show all
        </button>
        <ul>
          {parkingList
            .filter((parking) => {
              if (enoughSpace === null) {
                return true;
              }
              return enoughSpace
                ? parking.fields.grp_disponible > 100
                : parking.fields.grp_disponible <= 100;
            })
            .map((parking) => {
              return (
                <li key={parking.fields.idobj}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <ParkingItem {...parking.fields} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default ParkingList;

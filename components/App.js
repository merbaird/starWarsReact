import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    axios.get(`http://swapi.co/api/${this.props.urlend}/`)
      .then(res => {
         const planets = res.data.results;
         this.setState({ planets });
      });
  }

  render() {
    return (
      <div>
        <h1>{`/r/${this.props.urlend}`}</h1>
        <ul>
          {this.state.planets.map(planet =>
            <li key={planet.diameter}>{planet.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<FetchDemo urlend="planets"/>, document.getElementById('app'));

// climate : "temperate"
// created : "2014-12-10T11:50:29.349000Z"
// diameter : "4900"
// edited : "2014-12-20T20:58:18.429000Z"
// films : Array(1)
// gravity :
// "0.85 standard"
// name : "Endor"
// orbital_period : "402"
// population : "30000000"
// residents : Array(1)
// rotation_period : "18"
// surface_water : "8"
// terrain : "forests, mountains, lakes"
// url : "http://swapi.co/api/planets/7/"

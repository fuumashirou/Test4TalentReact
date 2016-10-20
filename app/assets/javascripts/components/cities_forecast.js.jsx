var CitiesForecast = React.createClass({
  propTypes: {
    cityName: React.PropTypes.string,
    countryName: React.PropTypes.string,
    tempMin: React.PropTypes.node,
    tempMax: React.PropTypes.node
  },

  render: function() {
    return (
      <div>
        <div>City Name: {this.props.cityName}</div>
        <div>Country Name: {this.props.countryName}</div>
        <div>Temp Min: {this.props.tempMin}</div>
        <div>Temp Max: {this.props.tempMax}</div>
      </div>
    );
  },

  fetchData() {
      url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.props.cityName+','+this.props.countryName+'&APPID=4d1acb469df57c5a142a6040c242d91f'
      fetch(url) 
          .then(result=> {
            console.log("result = ", result.json());
              // this.setState({items:result.json()});
          });

    }


  
});

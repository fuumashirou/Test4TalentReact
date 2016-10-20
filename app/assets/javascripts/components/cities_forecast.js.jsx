var CitiesForecast = React.createClass({
  propTypes: {
    cityName: React.PropTypes.string,
    countryName: React.PropTypes.string
  },


  componentDidMount() {
    var that= this;
    url= "http://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+","+this.props.countryName+"&APPID=4d1acb469df57c5a142a6040c242d91f",

    fetch(url) 
        .then(result=> {
            result.json().then(function(data) {  
              // console.log(data);  
              that.setState({tempMin:data.main.temp_min});
              that.setState({tempMax:data.main.temp_max});

              console.log("result = ", data);
            }); 

        })
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });
  },
  getInitialState: function(){
    return { tempMin: '', tempMax: ''}
  },

  render: function() {
    return (
      <div>
        <div>City Name: {this.props.cityName}</div>
        <div>Country Name: {this.props.countryName}</div>
        <div>Temp Min: {this.state.tempMin}</div>
        <div>Temp Max: {this.state.tempMax}</div>
      </div>
    );
    // return (
    //   <div>
    //     <div>City Name: {this.props.cityName}</div>
    //     <div>Country Name: {this.props.countryName}</div>
    //     <div>Temp Min: {this.props.tempMin}</div>
    //     <div>Temp Max: {this.props.tempMax}</div>
 
    //   </div>
    // );
  },





  
});

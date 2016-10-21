var CitiesForecast = React.createClass({
  propTypes: {
    cityName: React.PropTypes.string,
    countryName: React.PropTypes.string,
    cityId: React.PropTypes.number
  },

  getInitialState: function(){
    return { tempMin: '', tempMax: '', tempCurrent: ''}
  },
  handleClick: function(e){
    that = this;
    that.getWeather();

  },

  getWeather: function(){
    that = this;
    url= "http://api.openweathermap.org/data/2.5/weather?q="+that.props.cityName+","+that.props.countryName+"&APPID=4d1acb469df57c5a142a6040c242d91f&units=metric";

    fetch(url) 
        .then(result=> {
            result.json().then(function(data) { 
              console.log("--- getWeather data = ", data);
              that.setState({tempMin:data.main.temp_min});
              that.setState({tempMax:data.main.temp_max});
              that.setState({tempCurrent:data.main.temp});
              // that.setState({tempMax:data.weather.description});
              that.saveWeather();
            }); 

        })
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });


  },
  saveWeather: function(){
    that = this;
    dburl= "http://localhost:3000/city/wheather";
    fetch(dburl, {  
      method: 'post',  
      headers: {  
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
      },  
      body: 'city_id='+that.props.cityId+'&temp_min='+that.state.tempMin+'&temp_max='+that.state.tempMax+'&temp_current='+that.state.tempCurrent
      })
    // .then(json)  
      .then(function (data) {  
        console.log('Request succeeded with JSON response', data);  
      })  
      .catch(function (error) {  
        console.log('Request failed', error);  
      });

  },

  componentDidMount() {
    var that= this;

    dburl= "http://localhost:3000/city/wheather?city_id="+this.props.cityId;

    fetch(dburl) 
        .then(result=> {
            result.json().then(function(data) {
              console.log("bd data= ", data);
              
              if(data != undefined && data != null){

                that.setState({tempMin:data.temp_min});
                that.setState({tempMax:data.temp_max});
                that.setState({tempCurrent:data.current_temp});
                // that.setState({tempMax:data.description});
              }else{

                that.getWeather();

              }

            }); 

        })
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });
  },

  render: function() {
    return (
      <div>
        <div>{this.props.cityName}, {this.props.countryName}</div>
        <div> {this.state.tempCurrent}° C</div>
        <div>Min ↓ : {this.state.tempMin}° C</div>
        <div>Max ↑ : {this.state.tempMax}° C</div>

        <input type="button" onClick={this.handleClick} value="Actualizar" />
      </div>
    );

  },





  
});

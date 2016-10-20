var CitiesForecast = React.createClass({
  propTypes: {
    cityName: React.PropTypes.string,
    countryName: React.PropTypes.string,
    cityId: React.PropTypes.number
  },

  getInitialState: function(){
    return { tempMin: '', tempMax: ''}
  },
  handleClick: function(e){
    that = this;
    that.getWheather();

  },

  getWheather: function(){
    that = this;
    url= "http://api.openweathermap.org/data/2.5/weather?q="+that.props.cityName+","+that.props.countryName+"&APPID=4d1acb469df57c5a142a6040c242d91f";

    fetch(url) 
        .then(result=> {
            result.json().then(function(data) { 
              that.setState({tempMin:data.main.temp_min});
              that.setState({tempMax:data.main.temp_max});
              console.log("--- getWheather data = ", data);
              that.saveWheather();
            }); 

        })
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });


  },
  saveWheather: function(){
    that = this;
    dburl= "http://localhost:3000/city/wheather";
    fetch(dburl, {  
      method: 'post',  
      headers: {  
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
      },  
      body: 'city_id='+that.props.cityId+'&temp_min='+that.state.tempMin+'&temp_max='+that.state.tempMax
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
              // console.log("bd data= ", data);
              
              if(data != undefined && data != null){

                that.setState({tempMin:data.temp_min});
                that.setState({tempMax:data.temp_max});
              }else{

                that.getWheather();

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
        <div>City Id: {this.props.cityId}</div>
        <div>City Name: {this.props.cityName}</div>
        <div>Country Name: {this.props.countryName}</div>
        <div>Temp Min: {this.state.tempMin}</div>
        <div>Temp Max: {this.state.tempMax}</div>

        <input type="button" onClick={this.handleClick} value="Click Me!" />
      </div>
    );

  },





  
});

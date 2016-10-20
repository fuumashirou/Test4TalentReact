var CitiesForecast = React.createClass({
  propTypes: {
    cityName: React.PropTypes.string,
    countryName: React.PropTypes.string,
    cityId: React.PropTypes.number
  },

  getInitialState: function(){
    return { tempMin: '', tempMax: ''}
  },

  componentDidMount() {
    var that= this;

    url= "http://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+","+this.props.countryName+"&APPID=4d1acb469df57c5a142a6040c242d91f",

    fetch(url) 
        .then(result=> {
            result.json().then(function(data) {  
              // console.log(data);  
              // that.setState({tempMin:data.main.temp_min});
              // that.setState({tempMax:data.main.temp_max});

              console.log("openwheather result = ", data);
            }); 

        })
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });


    dburl= "http://localhost:3000/city/wheather?city_id="+this.props.cityId,

    fetch(dburl) 
        .then(result=> {
            result.json().then(function(data) {
              console.log("bd data= ", data);
              
              if(data != undefined && data != null){
                console.log("bd temp_min = ", data.temp_min);
                console.log("bd temp_max = ", data.temp_max);

                that.setState({tempMin:data.temp_min});
                that.setState({tempMax:data.temp_max});
                }
              // }else{
              //   // that.setState({tempMin:0});
              //   // that.setState({tempMax:0});

              // }

            }); 

        })
        .catch(function(err) {  
          console.log('Fetch Error :-S', err);  
        });
  },
  // componentDidMount() {
  //   var that= this;

  //   dburl= "http://localhost:3000/city/wheather?city_id="+this.props.cityId,

  //   fetch(dburl) 
  //       .then(result=> {
  //           result.json().then(function(data) {
  //             console.log("bd data= ", data);
              
  //             if(data != undefined && data != null){
  //               console.log("bd temp_min = ", data.temp_min);
  //               console.log("bd temp_max = ", data.temp_max);

  //               that.setState({tempMin:data.main.temp_min});
  //               that.setState({tempMax:data.main.temp_max});
                
  //             }else{
  //                url= "http://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+","+this.props.countryName+"&APPID=4d1acb469df57c5a142a6040c242d91f",

  //               fetch(url) 
  //                   .then(result=> {
  //                       result.json().then(function(data) {  
  //                         // console.log(data);  
  //                         // that.setState({tempMin:data.main.temp_min});
  //                         // that.setState({tempMax:data.main.temp_max});

  //                         console.log("openwheather result = ", data);
  //                       }); 

  //                   })
  //                   .catch(function(err) {  
  //                     console.log('Fetch Error :-S', err);  
  //                   });

  //             }

  //           }); 

  //       })
  //       .catch(function(err) {  
  //         console.log('Fetch Error :-S', err);  
  //       });


  // },

  render: function() {
    return (
      <div>
        <div>City Id: {this.props.cityId}</div>
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

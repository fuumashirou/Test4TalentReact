class HomeController < ApplicationController
  protect_from_forgery except: :index
  def index

    @cities = City.all
    @city = City.first
    @hostURL = request.url
  
  end

  def get_city_weather

  	forecast = Forecast.where(city_id: params[:city_id]).last

  	render json: forecast.to_json
  	
  end

  def save_city_weather
    
  	status = Forecast.create(temp_max: params[:temp_max], temp_min: params[:temp_min], city_id: params[:city_id], current_temp: params[:temp_current])

  	render json: status.to_json
  	
  end

end

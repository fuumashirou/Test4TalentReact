class HomeController < ApplicationController
  protect_from_forgery except: :index
  def index

  	@cities = City.all
  
  end

  def get_city_wheather

  	forecast = Forecast.where(city_id: params[:city_id]).last

  	render json: forecast.to_json
  	
  end

  def save_city_wheather

  	status = Forecast.create temp_max: params[:temp_max], temp_min: params[:temp_min], city_id: params[:city_id]

  	render json: status.to_json
  	
  end

end

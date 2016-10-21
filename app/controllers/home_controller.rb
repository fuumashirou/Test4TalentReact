class HomeController < ApplicationController
  protect_from_forgery except: :index
  def index

  	@cities = City.all
  
  end

  def get_city_wheather

  	forecast = Forecast.where(city_id: params[:city_id]).last
Rails.logger.debug("------------------ forecast = #{forecast.to_json}")

  	render json: forecast.to_json
  	
  end

  def save_city_wheather
Rails.logger.debug("------------------ params = #{params}")
  	status = Forecast.create(temp_max: params[:temp_max], temp_min: params[:temp_min], city_id: params[:city_id], current_temp: params[:temp_current])

  	render json: status.to_json
  	
  end

end

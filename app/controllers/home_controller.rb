class HomeController < ApplicationController
  
  def index

  	@cities = City.all
  
  end

  def get_city_wheather

  	Rails.logger.debug("ENTRE AQUI!!!! params = #{params}")

  	@forecast = Forecast.where(city_id: params[:city_id]).last
  	# Rails.logger.debug("------------- @forecast = #{@forecast.to_json}")


  	render json: @forecast.to_json
  	
  end

end

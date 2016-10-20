# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#


["Buenos Aires, Argentina", "Santiago, Chile", "Lima, Peru", "Sao Pablo, Brazil"].each do |data|
	puts "------------------------ data = #{data}"
	options = { units: "metric", APPID: "4d1acb469df57c5a142a6040c242d91f" }
	response = OpenWeather::Current.city(data,options)
	puts "------------------------ response = #{response}"
	city_name, country_name = data.split(', ')
	temp_max = response["main"]["temp_max"]
	temp_min = response["main"]["temp_min"]

	new_city = City.create name: city_name, country: country_name
	Forecast.create temp_max: temp_max, temp_min: temp_min, city_id: new_city.id

end

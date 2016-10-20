# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#


["Buenos Aires, Argentina", "Santiago, Chile", "Lima, Peru", "Sao Pablo, Brazil"].each do |data|
	puts "------------------------ data = #{data}"
	city_name, country_name = data.split(', ')

	new_city = City.create name: city_name, country: country_name

end

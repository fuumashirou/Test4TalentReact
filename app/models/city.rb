class City < ActiveRecord::Base
	has_many :forecasts, :dependent => :destroy
end

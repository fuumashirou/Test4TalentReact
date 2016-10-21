class AddCurrentTempColumnToForecasts < ActiveRecord::Migration
  def change
    add_column :forecasts, :current_temp, :float
  end
end

class AddIconColumnToForecasts < ActiveRecord::Migration
  def change
    add_column :forecasts, :icon, :string
  end
end

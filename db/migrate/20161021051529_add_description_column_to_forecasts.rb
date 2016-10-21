class AddDescriptionColumnToForecasts < ActiveRecord::Migration
  def change
    add_column :forecasts, :description, :string
  end
end

class CreateForecasts < ActiveRecord::Migration
  def change
    create_table :forecasts do |t|
      t.float :temp_min
      t.float :temp_max
			t.references :city, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end

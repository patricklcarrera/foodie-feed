class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :description
      t.string :ingredients
      t.string :instructions
      t.string :image
      t.boolean :saved_recipe
      t.integer :user_id
    end
  end
end

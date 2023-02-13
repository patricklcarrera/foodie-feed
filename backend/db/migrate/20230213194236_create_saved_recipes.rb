class CreateSavedRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_recipes do |t|
      t.integer :user_id
      t.integer :recipe_id
    end
  end
end

require "faker"

User.destroy_all
Comment.destroy_all
Recipe.destroy_all
SavedRecipe.destroy_all

puts "🌱 Seeding spices..."

# Seed your database here

10.times do User.create(
    name: Faker::Movies::HarryPotter.character,
    username: Faker::Name.unique.first_name,
    email: Faker::Internet.safe_email,
    password: Faker::Internet.password(min_length: 3, max_length: 8),
    profile_pic_url: Faker::Avatar.image,
    bio: "My favorite food is #{Faker::Food.dish}",
    # saved_recipes_id: SavedRecipe.all.sample.id
)
end

10.times do Recipe.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
    instructions: Faker::Restaurant.review,
    recipe_image_url: Faker::SlackEmoji.food_and_drink
)
end

5.times do Comment.create(
    recipe_id: Recipe.all.sample.id,
    user_id: User.all.sample.id,
    content: "This was #{Faker::Adjective.negative}"
)
end

5.times do Comment.create(
    recipe_id: Recipe.all.sample.id,
    user_id: User.all.sample.id,
    content: "This was #{Faker::Adjective.positive}"
)
end

10.times do SavedRecipe.create(
    recipe_id: Recipe.all.sample.id,
    user_id: User.all.sample.id
)
end

puts "✅ Done seeding!"

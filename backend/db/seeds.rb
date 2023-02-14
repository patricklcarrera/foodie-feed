require "faker"

User.destroy_all
Comment.destroy_all
Recipe.destroy_all

puts "🌱 Seeding spices..."

# Seed your database here


User.create(
    name: "admin",
    username: "admin",
    email: "admin@mail.com",
    password: "123",
    profile_pic_url: Faker::Avatar.image,
    bio: "My favorite food is #{Faker::Food.dish}"
)

10.times do User.create(
    name: Faker::Movies::HarryPotter.character,
    username: Faker::Name.unique.first_name,
    email: Faker::Internet.safe_email,
    password: Faker::Internet.password(min_length: 3, max_length: 8),
    profile_pic_url: Faker::Avatar.image,
    bio: "My favorite food is #{Faker::Food.dish}"
)
end



20.times do Recipe.create(
    name: Faker::Food.dish,
    description: Faker::Food.description,
    ingredients: [Faker::Food.ingredient, Faker::Food.ingredient, Faker::Food.ingredient],
    instructions: Faker::Restaurant.review,
    recipe_image_url: Faker::SlackEmoji.food_and_drink,
    saved_recipe: Faker::Boolean.boolean,
    user_id: User.all.sample.id
)
end

20.times do Comment.create(
    content: "This was #{Faker::Adjective.positive}",
    recipe_id: Recipe.all.sample.id,
    user_id: User.all.sample.id
)
end

20.times do Comment.create(
    
    # saved_recipe_id: SavedRecipe.all.sample.id,
    content: "This was #{Faker::Adjective.negative}",
    recipe_id: Recipe.all.sample.id,
    user_id: User.all.sample.id
)
end




puts "✅ Done seeding!"

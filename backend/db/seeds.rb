require "faker"

User.destroy_all
Comment.destroy_all
Recipe.destroy_all

puts "🌱 Seeding spices..."

# Seed your database here


User.create(
    name: "Jon Snow",
    username: "KingOfTheNorth",
    email: "admin@mail.com",
    password: "iknownothing",
    photo: "https://www.usmagazine.com/wp-content/uploads/2022/12/Everything-to-Know-About-the-Jon-Snow-Series-HBO-Is-Developing-With-Game-of-Thrones-Kit-Harington-125.jpg?quality=86&strip=all",
    bio: "My favorite food is #{Faker::Food.dish}"
)

5.times do User.create(
    name: Faker::Movies::HarryPotter.character,
    username: Faker::Name.unique.first_name,
    email: Faker::Internet.safe_email,
    password: Faker::Internet.password(min_length: 3, max_length: 8),
    photo: Faker::Avatar.image,
    bio: "My favorite food is #{Faker::Food.dish}"
)
end



Recipe.create(
    name: "Vegan Lentil Soup",
    description: "A hearty and nutritious soup made with lentils, vegetables, and spices. Perfect for a warm and cozy meal on a cold day.",
    ingredients: "
    1 cup dried lentils
    1 chopped onion 
    2 cloves minced garlic
    2 peeled and chopped carrots
    2 chopped celery stalks
    4 cups vegetable broth
    1 tsp cumin
    1 tsp paprika
    Salt and pepper to taste",
    instructions: "
    1. Rinse the lentils and set aside. 
    2. In a large pot, sauté the onion and garlic in a bit of oil until fragrant. 
    3. Add the chopped carrots and celery and sauté for a few minutes more. 
    4. Add the lentils, broth, and spices to the pot and stir to combine.
    5. Bring to a boil, then reduce the heat and let simmer for 30-40 minutes, until the lentils are tender. 
    6. Serve hot and enjoy!",
    image: 'https://www.noracooks.com/wp-content/uploads/2018/11/square-1.jpg',
    saved_recipe: true,
    user_id: User.all.sample.id
)


Recipe.create(
    name: "Avocado Toast",
    description: "A simple and delicious breakfast or snack featuring creamy avocado on top of toasted bread.",
    ingredients: "
    2 slices of bread
    1 ripe avocado
    1 small diced tomato
    Salt and pepper to taste",
    instructions:"
    1. Toast the bread until crispy. 
    2. Cut the avocado in half, remove the pit, and scoop out the flesh into a bowl. 
    3. Mash the avocado with a fork and add salt and pepper to taste. 
    4. Spread the mashed avocado onto the toasted bread slices.
    5. Top with diced tomatoes.
    6. Serve and enjoy!",
    image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F07%2Fmain%2F1807w-avocado-toast-recipe.jpg%3Fitok%3D_dDi7ZQQ",
    saved_recipe: false,
    user_id: User.all.sample.id
)
Recipe.create(
    name: "Baked Sweet Potato Fries",
    description: "Crispy, flavorful fries made from sweet potatoes and baked to perfection.",
    ingredients: "
    2 large sweet potatoes,
    peeled and cut into thin strips
    2 tbsp olive oil
    1 tsp paprika
    1 tsp garlic powder
    Salt and pepper to taste",
    instructions: "
    1. Preheat the oven to 400°F (200°C).
    2. Toss the sweet potato strips in a bowl with olive oil, paprika, garlic powder, salt, and pepper.
    3. Arrange the sweet potato strips in a single layer on a baking sheet.
    4. Bake for 20-25 minutes, flipping halfway through, until the fries are crispy and golden brown.
    5. Serve hot and enjoy!",
    image:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Baked-Sweet-Potato-Fries_EXPS_THSO17_87885_B04_20_3b.jpg",
    saved_recipe: true,
    user_id: User.all.sample.id
)
Recipe.create(
    name: "Classic Margherita Pizza",
    description: "A classic pizza topped with tomato sauce, fresh mozzarella, and basil.",
    ingredients:"
    1 pound pizza dough
    1/2 cup tomato sauce
    8 oz fresh mozzarella, sliced
    Fresh basil leaves
    Salt and pepper to taste",
    instructions: "
    1. Preheat the oven to 450°F (230°C).
    2. Roll out the pizza dough to the desired thickness and shape.
    3. Spread the tomato sauce evenly over the dough, leaving a bit of space around the edges.
    4. Arrange the mozzarella slices on top of the sauce.
    5. Season with salt and pepper to taste.
    6. Bake for 10-15 minutes, until the crust is golden brown and the cheese is melted.
    7. Remove from the oven and top with fresh basil leaves.
    8. Slice and serve hot.",
    image: "https://images.getrecipekit.com/20220211142347-margherita-9920.jpg?aspect_ratio=4:3&quality=90&",
    saved_recipe: false,
    user_id: User.all.sample.id
)
Recipe.create(
    name: "Classic Spaghetti and Meatballs",
    description:"A hearty and comforting dish that never fails to please. Perfect for a cozy family dinner or a gathering with friends.",
    ingredients:"
    1 lb spaghetti
    1 lb ground beef
    1/2 cup bread crumbs
    1/4 cup grated Parmesan cheese
    1 egg
    1 clove garlic, minced
    1/2 tsp salt
    1/4 tsp black pepper
    1 jar (24 oz) marinara sauce
    Fresh parsley, chopped (for garnish)",
    instructions:"
    1. Cook spaghetti according to package instructions. Drain and set aside.
    2. In a large bowl, combine ground beef, bread crumbs, Parmesan cheese, egg, garlic, salt, and pepper. Mix well.
    3. Form the mixture into meatballs, about 1 inch in diameter.
    4. Heat a large skillet over medium-high heat. Add the meatballs and cook until browned on all sides, about 5-7 minutes.
    5. Add the marinara sauce to the skillet and stir to combine. Reduce heat to low and simmer for 10-15 minutes, until the meatballs are cooked through.
    6. Serve the meatballs and sauce over the spaghetti. Garnish with chopped parsley.",
    image: "https://www.thespruceeats.com/thmb/zd8NPf2wxmDQRR3xm5-lgcFgIDk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spaghettimeatballs-135583313-56bdcea15f9b5829f85ee94a.jpg",
    saved_recipe: true,
    user_id: User.all.sample.id
)
Recipe.create(
    name: "Creamy Tomato Soup",
    description:"A rich and velvety soup made with fresh tomatoes and cream. Perfect for a chilly day or a light lunch.",
    ingredients:"
    2 lbs tomatoes, cored and chopped
    1 onion, chopped
    3 cloves garlic, minced
    2 tbsp olive oil
    2 cups vegetable broth
    1/2 cup heavy cream
    Salt and pepper, to taste
    Fresh basil leaves, chopped (for garnish)
    ",
    instructions:"
    1. Heat the olive oil in a large pot over medium heat. Add the onion and garlic and cook until softened, about 5 minutes.
    2. Add the chopped tomatoes and vegetable broth to the pot. Bring to a boil, then reduce heat to low and simmer for 20-25 minutes, until the tomatoes are very soft.
    3. Using an immersion blender, puree the soup until smooth. (Alternatively, transfer the soup to a blender and puree in batches, being careful not to overfill the blender.) Return the soup to the pot.
    4. Stir in the heavy cream and season with salt and pepper to taste.
    5. Simmer the soup for another 5-10 minutes, until heated through.
    6. Serve the soup hot, garnished with chopped fresh basil.
    ",
    image: "https://lifeloveandgoodfood.com/wp-content/uploads/2022/08/Creamy-Tomato-Soup-13-1200x1200-1.jpg",
    saved_recipe: false,
    user_id: User.all.sample.id
)
Recipe.create(
    name: "Classic Pancakes",
    description:"Fluffy and delicious pancakes that are perfect for breakfast or brunch.",
    ingredients:"
    1 1/2 cups all-purpose flour
    3 1/2 teaspoons baking powder
    1 teaspoon salt
    1 tablespoon white sugar
    1 1/4 cups milk
    1 egg
    3 tablespoons butter, melted",
    instructions:"
    1. In a large mixing bowl, combine the flour, baking powder, salt, and sugar.
    2. In a separate bowl, whisk together the milk, egg, and melted butter.
    3. Add the wet ingredients to the dry ingredients and mix until well combined.
    4. Heat a nonstick skillet over medium heat.
    5. Pour 1/4 cup of batter onto the skillet for each pancake.
    6. Cook until bubbles form on the surface, then flip and cook for an additional 1-2 minutes on the other side.
    7. Serve hot with butter and maple syrup.",
    image: "https://cdn-prd.healthymealplans.com/recipe/aaed165eee53dd6efc83869a9c0b0fd0-Classic-Pancakes_16x9_1200_Healthy-Meal-Plans.jpg",
    saved_recipe: false,
    user_id: User.all.sample.id
)
Recipe.create(
    name: "Baked Mac and Cheese",
    description:"A classic and indulgent dish that is sure to please.",
    ingredients:"
    8 oz elbow macaroni
    2 tablespoons butter
    2 tablespoons all-purpose flour
    2 cups milk
    2 cups shredded cheddar cheese
    Salt and pepper to taste",
    instructions:"
    1. Preheat the oven to 350°F.
    2. Cook the macaroni according to package instructions and drain.
    3. In a large saucepan, melt the butter over medium heat.
    4. Add the flour and whisk until smooth.
    5. Gradually add the milk, whisking constantly, until the mixture is smooth and thickened.
    6. Add the shredded cheese and stir until melted.
    7. Add the cooked macaroni to the cheese sauce and stir to combine.
    8. Season with salt and pepper to taste.
    9. Transfer the mac and cheese to a baking dish.
    10. Bake for 20-25 minutes or until bubbly and golden on top.
    11. Serve hot and enjoy!",
    image: "https://joyfoodsunshine.com/wp-content/uploads/2021/08/easy-baked-mac-and-cheese-recipe-1.jpg",
    saved_recipe: true,
    user_id: User.all.sample.id
)

Recipe.create(
    name: "Spaghetti Carbonara",
    description:"A classic Italian pasta dish with a rich and creamy sauce made from eggs, Parmesan cheese, and pancetta.",
    ingredients:"
    1 pound spaghetti
    4 ounces pancetta, diced
    4 large eggs
    1 cup freshly grated Parmesan cheese
    Salt and black pepper",
    instructions:"
    1. Cook spaghetti according to package directions until al dente.
    2. In a large skillet, cook pancetta over medium heat until crisp and browned.
    3. In a medium bowl, whisk together eggs and Parmesan cheese until well combined.
    4. Drain the cooked spaghetti and immediately add it to the skillet with the pancetta, tossing to coat.
    5. Remove the skillet from heat and add the egg mixture, tossing quickly to coat the spaghetti and create a creamy sauce.
    6. Season with salt and pepper to taste and serve immediately.",
    image: "https://www.aheadofthyme.com/wp-content/uploads/2021/01/spaghetti-carbonara.jpg",
    saved_recipe: true,
    user_id: User.all.sample.id
)

Recipe.create(
    name: "Chicken Tikka Masala",
    description:"A flavorful and spicy Indian dish made with marinated chicken in a creamy tomato-based sauce.",
    ingredients:"
    1 pound boneless, skinless chicken breasts, cut into bite-sized pieces
    1 cup plain Greek yogurt
    2 tablespoons lemon juice
    2 teaspoons ground cumin
    2 teaspoons ground coriander
    1 teaspoon ground turmeric
    1 teaspoon ground paprika
    1/2 teaspoon cayenne pepper
    3 cloves garlic, minced
    1 tablespoon grated fresh ginger
    1/2 cup tomato sauce
    1 cup heavy cream
    Salt and black pepper",
    instructions:"
    1. In a large bowl, whisk together yogurt, lemon juice, cumin, coriander, turmeric, paprika, cayenne pepper, garlic, and ginger.
    2. Add chicken pieces to the bowl and toss to coat in the marinade. Cover and refrigerate for at least 30 minutes or up to 24 hours.
    3. Preheat a grill or grill pan over medium-high heat. Grill the chicken until cooked through and lightly charred, about 5-7 minutes per side.
    4. In a large skillet, heat tomato sauce over medium heat. Add the grilled chicken and stir to coat in the sauce.
    5. Pour in the heavy cream and simmer until the sauce has thickened, about 10-15 minutes.
    6. Season with salt and pepper to taste and serve with basmati rice and naan bread.",
    image: "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
    saved_recipe: true,
    user_id: User.all.sample.id
)

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

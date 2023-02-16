class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
#getting individual user
  get '/users/:id' do
    user = User.find(params[:id])
    user.to_json
  end

  #get recipes written by a user
  get '/users/:id/recipes' do
    user = User.find(params[:id])
    recipes = Recipe.where(user_id: user)
    recipes.to_json
  end
#getting all users
  get '/users' do
    users = User.all
    users.to_json
  end

  patch '/users/:id' do
    user = User.find(params[:id])
    user.update(photo: params[:photo], bio: params[:bio])
    user.to_json
  end
  
# /login 
# verify the password and email

# {
#  email: "123@.com"
#  password: "123"
# }

#new user sign-up 
  post '/users' do
    user = User.create!(
            name: params[:name],
            username: params[:username], 
            password: params[:password], 
            email: params[:email],
            photo: params[:photo],
            bio: params[:bio]
            )
    user.to_json
  end

#get all comments
  get '/comments' do
    comments = Comment.all
    comments.to_json
  end
#get all comments for one recipe
  get '/recipes/:id/comments' do
    comments = Recipe.find(params[:id]).comments
    comments.to_json
  end
#get one recipe
  get '/recipes/:id' do
    recipe = Recipe.find(params[:id])
    recipe.to_json
  end
#get all recipes
  get '/recipes' do
    recipes = Recipe.all
    recipes.to_json(include: {comments: {include: :user}})
  end
#create a new recipe (within the first user's account)
  post '/recipes/new' do
    recipe = Recipe.create!(name: params[:name],
                        description: params[:description],
                        ingredients: params[:ingredients],
                        instructions: params[:instructions],
                        image: params[:image],
                        saved_recipe: params[:saved_recipe],
                        user_id: User.first.id
                        )
    recipe.to_json
  end
#delete one recipe
  delete '/recipes/:id' do
    recipe = Recipe.find(params[:id])
    recipe.destroy
  end
#write a new comment for the specific recipe
  post '/recipes/:id/comments/new' do
    recipe = Recipe.find(params[:id])
    comments = recipe.comments.create!(content: params[:content],
                    recipe_id: params[:id],
                    user_id: User.first.id)
    comments.to_json
  end

#edit exiting comment
 patch '/comments/:id/edit' do
  comment = Comment.find(params[:id])
  comment.update(content: params[:content])
  comment.to_json
 end
#delete one comment
  delete '/comments/:id' do
    comment = Comment.find(params[:id])
    comment.destroy
  end
#view saved recipes
  get '/saved_recipes' do
    recipe = Recipe.all.where(saved_recipe: 1)
    recipe.to_json
  end
#delete one recipe list from the saved recipes list
  patch '/recipes/:id/saved_recipes/delete' do
    recipe = Recipe.find(params[:id])
    recipe.update(saved_recipe: 0)
    recipe.to_json
  end

#add one recipe list from the saved recipes list
  patch '/recipes/:id/saved_recipes/add' do
    recipe = Recipe.find(params[:id])
    recipe.update(saved_recipe: 1)
    recipe.to_json
  end


end

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here

  get '/users/:id' do
    user = User.find(params[:id])
    user.to_json
  end

  get '/users' do
    users = User.all
    users.to_json
   end
  
# /login 
# verify the password and email

# {
#  email: "123@.com"
#  password: "123"
# }






  post '/users' do
    user = User.create!(username: params[:username], 
            password: params[:password], 
            email: params[:email],
            profile_pic_url: params[:profile_pic_url],
            bio: params[:bio]
            )
    user.to_json
  end
  get '/recipes/:id/comments' do
    comments = Recipe.find(params[:id]).comments
    comments.to_json
  end

  get '/recipes/:id' do
    recipe = Recipe.find(params[:id])
    recipe.to_json
  end

  get '/recipes' do
    recipes = Recipe.all
    recipes.to_json
  end
 
  post '/recipes/new' do
    recipe = Recipe.create!(name: params[:name],
                        description: params[:description],
                        ingredients: params[:ingredients],
                        instructions: params[:instructions],
                        recipe_image_url: params[:recipe_image_url],
                        saved_recipe: params[:saved_recipe],
                        user_id: User.first.id
                        )
    recipe.to_json
  end

  delete '/recipes/:id' do
    recipe = Recipe.find(params[:id])
    recipe.destroy
  end

  post '/recipes/:id/comments/new' do
    recipe = Recipe.find(params[:id])
    comments = recipe.comments.create!(content: params[:content],
                    recipe_id: params[:id],
                    user_id: User.first.id)
    comments.to_json
  end

  delete '/comments/:id' do
    comment = Comment.find(params[:id])
    comment.destroy
  end

  get '/saved_recipes' do
    recipe = Recipe.all.where(saved_recipe: 1)
    recipe.to_json
  end

  patch '/recipes/:id/saved_recipes/delete' do
    recipe = Recipe.find(params[:id])
    recipe.update(saved_recipe: 0)
    recipe.to_json
  end

  patch '/recipes/:id/saved_recipes/add' do
    recipe = Recipe.find(params[:id])
    recipe.update(saved_recipe: 1)
    recipe.to_json
  end


end

class Comment < ActiveRecord::Base
    # has_many :recipes
    # has_many :users, through: :recipes
    belongs_to :user
    belongs_to :recipe
end
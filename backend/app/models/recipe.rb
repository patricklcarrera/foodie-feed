class Recipe < ActiveRecord::Base
    belongs_to :user
    has_many :comments
    has_many :users, through: :comments

    def comments_and_their_users
        self.comments.map { |comment| `#{comment.user.username} #{comment.content}`}
    end
end
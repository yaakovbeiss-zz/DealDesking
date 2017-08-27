class Make < ApplicationRecord

  validates :name, presence: true

  has_many :models
  
end

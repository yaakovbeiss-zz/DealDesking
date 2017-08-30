class Trim < ApplicationRecord

  validates :name, :model_id, presence: true

  belongs_to :model
  
end

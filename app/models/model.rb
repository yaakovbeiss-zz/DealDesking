class Model < ApplicationRecord

  validates :name, :make_id, presence: true

  belongs_to :make

  has_many :trims

end

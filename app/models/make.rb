class Make < ApplicationRecord

  validates :name, presence: true

  has_many :models

  has_many :trims,
    through: :models,
    source: :trims

  scope :year, -> (year) { where year: year }
end

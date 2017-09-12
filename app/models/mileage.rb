class Mileage < ApplicationRecord

  validates :quote, :mileage, presence: true

  belongs_to :quote
  has_many :residuals

end

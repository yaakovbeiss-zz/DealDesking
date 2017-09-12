class Mileage < ApplicationRecord

  validates :mileage, presence: true

  belongs_to :quote, optional: true
  has_many :residuals

end

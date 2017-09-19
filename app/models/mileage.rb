class Mileage < ApplicationRecord

  validates :mileage, presence: true

  belongs_to :residual, optional: true

end

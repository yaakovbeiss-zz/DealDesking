class Residual < ApplicationRecord

  validates :residual, presence: true

  belongs_to :term, optional: true
  belongs_to :mileage, optional: true

end

class Residual < ApplicationRecord

  validates :term, :residual, presence: true

  belongs_to :term
  belongs_to :mileage

end

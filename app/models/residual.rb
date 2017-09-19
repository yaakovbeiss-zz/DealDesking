class Residual < ApplicationRecord

  validates :residual, presence: true

  belongs_to :term, optional: true

  has_many :mileages

  accepts_nested_attributes_for :mileages, allow_destroy: true

end

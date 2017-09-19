class Term < ApplicationRecord

  validates :months, presence: true

  belongs_to :quote, optional: true

  has_many :rebates, dependent: :destroy
  has_many :money_factors, dependent: :destroy
  has_many :residuals, dependent: :destroy

  has_many :mileages,
    through: :residuals,
    source: :mileages

  accepts_nested_attributes_for :rebates, :money_factors, :residuals, allow_destroy: true

end

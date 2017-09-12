class Term < ApplicationRecord

  validates :quote, :months, presence: true

  belongs_to :quote

  has_many :rebates, dependent: :destroy
  has_many :money_factors, dependent: :destroy
  has_many :residuals, dependent: :destroy

  accepts_nested_attributes_for :rebates, :money_factors, :residuals

end

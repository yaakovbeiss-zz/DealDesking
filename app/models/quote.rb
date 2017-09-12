class Quote < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user
  belongs_to :lead, optional: true

  has_many :terms, dependent: :destroy, inverse_of: :quote

  has_many :mileages, dependent: :destroy, inverse_of: :quote

  has_many :rebates,
    through: :terms,
    source: :rebates

  has_many :money_factors,
    through: :terms,
    source: :money_factors

  has_many :residuals,
    through: :terms,
    source: :residuals

  accepts_nested_attributes_for :terms, :mileages, allow_destroy: true

end

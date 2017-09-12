class MoneyFactor < ApplicationRecord

  validates :money_factor, presence: true

  belongs_to :term, optional: true

end

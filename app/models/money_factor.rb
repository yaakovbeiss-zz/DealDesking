class MoneyFactor < ApplicationRecord

    validates :term, :money_factor, presence: true

    belongs_to :term

end

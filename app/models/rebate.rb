class Rebate < ApplicationRecord

  validates :term, :amount, presence: true

  belongs_to :term

end

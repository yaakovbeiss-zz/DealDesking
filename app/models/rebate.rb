class Rebate < ApplicationRecord

  validates :amount, presence: true

  belongs_to :term, optional: true

end

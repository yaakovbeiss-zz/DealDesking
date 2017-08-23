class Quote < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user
  belongs_to :lead, optional: true

end

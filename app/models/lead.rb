class Lead < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user

  has_many :quotes,
    foreign_key: :user_id,
    class_name: 'Quote'



end

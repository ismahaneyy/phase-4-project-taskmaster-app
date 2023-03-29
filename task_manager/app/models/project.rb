class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks 

  validates :name, presence: true 
  validates :due_date, presence: true 
end

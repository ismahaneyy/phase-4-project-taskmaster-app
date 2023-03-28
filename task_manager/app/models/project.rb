class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks 

  validates :name, presence: true 
  validates :duedate, presence: true 
  
end

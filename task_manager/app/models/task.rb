class Task < ApplicationRecord
  belongs_to :project
  belongs_to :user

  validates :name, presence: true
  validates :description, presence: true
  validates :due_date, presence: true 
  # validates :completed, presence: true
  validates :project_id, presence: true
  validates :user_id, presence: true


end

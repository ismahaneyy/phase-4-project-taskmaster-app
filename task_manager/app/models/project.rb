class Project < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy

  before_destroy :update_dependent_records
  
    private
  
    def update_dependent_records
      tasks.update_all(project_id: nil)
    end
  
  validates :name, presence: true 
  validates :due_date, presence: true 
end

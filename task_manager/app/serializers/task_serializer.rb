class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :due_date, :completed
  # belongs_to :user
  belongs_to :project
end

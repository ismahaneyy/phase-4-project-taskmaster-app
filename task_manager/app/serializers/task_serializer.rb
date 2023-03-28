class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :due_date, :completed
end

class TasksController < ApplicationController
    before_action :find_project_and_task, only: [:show, :update, :destroy]

    def index
      tasks = current_user.tasks.all
      render json: tasks
    end
  
    def show
      render json: @task, status: :found
    end
  
    def create 
      task = current_user.tasks.new(task_params)
      task.project_id = params[:project_id]
      if task.save
        render json: task, status: :created
      else
        render json: { error: task.errors.full_messages }
      end
    end
  
    def update
      if @task.update(task_params)
        render json: { message: "Task updated successfully" }
      else
        render json: @task.errors.full_messages
      end
    end
  
    def destroy
      if @task.destroy
        render json: { message: "Task destroyed successfully" }
      else
        render json: { message: "Failed to destroy task" }
      end
    end
  
    private
  
    def find_project_and_task
      @task = current_user.tasks.find_by(id: params[:id], project_id: params[:project_id])
      render json: { message: "Task not found" }, status: :not_found unless @task
    end
  
    def task_params
      params.permit(:name, :description, :due_date, :completed)
    end
end
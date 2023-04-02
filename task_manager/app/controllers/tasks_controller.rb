class TasksController < ApplicationController

    before_action :verify_auth

    def index
      tasks = current_user.tasks.all
      render json: tasks
    end

  
    def show
      render json: @task, status: :found
    end
    
  
    def create 
      current_task = current_user.tasks.new(task_params)
      current_task.project_id = params[:project_id]
      if current_task.save
        render json: current_task, status: :created
      else
        render json: { error: current_task.errors.full_messages }, status: :unprocessable_entity
      end
    end
  

    def update
      current_task = current_user.tasks.find_by(id: params[:id], project_id: params[:project_id])
      if current_task.update(task_params)
        render json: { message: "Task updated successfully" }, status: :ok
      else
        render json: current_task.errors.full_messages
      end
    end

  
    def destroy
     current_task = current_user.tasks.find_by(id: params[:id], project_id: params[:project_id])
      if current_task.destroy
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
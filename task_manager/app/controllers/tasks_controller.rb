class TasksController < ApplicationController

    def index
        tasks = Task.all
        render json: tasks
    end

    def show
        task = Task.find(params[:id])
        render json: task
    end

    def create 
        task = Task.new(task_params)
        if task.save
            render json: task, status: :created
        else
            render json: { error: task.errors.full_messages}
        end
    end

    def update
        task = Task.find(params[:id]).update(task_params)
        if task
            render json: { message: "task updated successfully"}
        else
            render json: task.errors.full_messages
        end
    end


    private

    def task_params
        params.permit(:name, :description, :due_date, :completed, :user_id, :project_id)
    end

end

class TasksController < ApplicationController


    def index
        tasks = current_user.tasks.all
        render json: tasks
    end

    def show
        task = current_user.tasks.find_by(id: params[:id])
        if task
            render json: task, status: :found
        else
            render json: { message: "Task not found" }, status: :not_found
        end
    end

    def create 
        task = current_user.tasks.new(task_params)
        if task.save
            render json: task, status: :created
        else
            render json: { error: task.errors.full_messages}
        end
    end

    def update
        task = current_user.tasks.find(params[:id]).update(task_params)
        if task
            render json: { message: "task updated successfully"}
        else
            render json: task.errors.full_messages
        end
    end

    def destroy
        task = current_user.tasks.find(params[:id])
        if task.destroy
            render json: { message: "Task destroyed successfully"}
        else
            render json: { message: "Failed to destroy task"}
        end
    end


    private

    def task_params
        params.permit(:name, :description, :due_date, :completed, :project_id)
    end

end
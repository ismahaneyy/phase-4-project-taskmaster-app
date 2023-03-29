class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  def index
    if params[:user_id]
      render json: User.find(params[:user_id]).projects
    else
      render json: current_user.projects
    end
  end

  def create
    project = current_user.projects.new(project_params)

    if project.save
      render json: project, status: :created 
    else
      render json: { errors: project.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: { errors: @project.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @project.destroy
    head :no_content
  end

  private

  def set_project
    @project = User.find(params[:user_id]).projects.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :description, :due_date, :completed)
  end
end

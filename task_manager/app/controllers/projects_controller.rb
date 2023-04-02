class ProjectsController < ApplicationController

  before_action :verify_auth


  def index
    if current_user
      render json: current_user.projects, include: :tasks
    else
      render json: current_user , status: :unprocessable_entity
    end
  end


  def show
    if current_user
      projects = current_user.projects.find(params[:id])
      render json: projects , include: :tasks
    else
      render json: { message: 'Project not found' }
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
    current_project = current_user.projects.find(params[:id])
    if current_project.update(project_params)
      render json: current_project
    else
      render json: { errors: current_project.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def destroy
    current_project = current_user.projects.find(params[:id])
    current_project.destroy
    head :no_content
  end


  private


  def project_params
    params.permit(:name, :description, :due_date, :completed)
  end
end

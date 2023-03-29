class ProjectsController < ApplicationController

    before_action :set_project, only: [:show, :update, :destroy]
    before_action :authenticate_user!

    def index
        projects = current_user.projects
        render json: projects
      end
  
      def create
        project = current_user.projects.create(project_params)
        if project.save
          render json: project
        else
          render json: { errors: project.errors.full_messages }, status: :unprocessable_entity
        end
      end
  
     

end

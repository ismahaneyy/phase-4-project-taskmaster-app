class ProjectsController < ApplicationController

    before_action :set_project, only: [:show, :update, :destroy]
    before_action :authenticate_user!

    def index
        projects = current_user.projects
        render json: projects
      end
  
      

end

class ProjectsController < ApplicationController

    before_action :set_project, only: [:show, :update, :destroy]
    before_action :authenticate_user!

    

end

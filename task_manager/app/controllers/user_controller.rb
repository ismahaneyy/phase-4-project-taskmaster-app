class UserController < ApplicationController
    before_action :set_user, only: [show update destroy]
    skip_before_action :authenticate_user!, only: :create
  
    def index
      users = User.all
      render json: users
    end
  
    def show
      render json: @user
    end
  
    def create
      user = User.new(user_params)
      if user.save
        session[:user_id] = user.id
  
        render json: user, status: :created
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @user.destroy
      head :no_content
    end
  
    private
  
    def set_user
      @user = User.find(params[:id])
    end
  
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

end



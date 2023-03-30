class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
    # skip_before_action :authenticate_user!, only: :create
  
    def show
      render json: @user
    end
  
    def create
      user = User.new(user_params)
      user.password = params[:password]
      user.password_reset_token= SecureRandom.urlsafe_base64
      if user.save
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
      params.permit(:name, :email, :password)
    end

end



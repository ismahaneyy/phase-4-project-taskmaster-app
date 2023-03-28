class UserController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]
    before_action :authorize_request, except: :create 

    def index
        users = User.all 
        render json: users 
    end

    def show 
        user = User.find_by(:id params[:id])
        render json: user 
    end

    def create 
        user = User.new(user_params)
        if user.save 
            session[:user_id] = user.id

            render json: user, status: :ok
        else 
            render json: {error: user.error.full_messages }, status: :unprocessable_entity
        end
    end

    def update 
        user = User.update(user_params)
        if user 
            render json: user, status: :okay
        else 
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy 
        user.destroy
        head :no_content
    end

    private

    def set_user
        user = user.find(params[:id])
    end

    def user_params 
        params.require(:user).permit(:name, :email, :password, :password_confirmation )
    end


end

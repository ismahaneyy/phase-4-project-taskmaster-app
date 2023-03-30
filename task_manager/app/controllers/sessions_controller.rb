class SessionsController < ApplicationController

    def create
      user = User.find_by(email: params[:email])
      save_user(user.id)
      if current_user && current_user.authenticate(params[:password])
        render json: { message: "Login successful", user: current_user }, status: :ok
      else
        render json: { errors: { invalid: ["credentials"] } }, status: :unprocessable_entity
      end
    end

    def check_out
      if current_user 
        render json: current_user
      else
        render json: { message: "No user is logged in"}
      end
    end

    def destroy 
       remove_user
    end

end


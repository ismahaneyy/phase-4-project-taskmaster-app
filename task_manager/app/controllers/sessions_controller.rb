class SessionsController < ApplicationController

  def create
    if current_user && current_user.authenticate(params[:password])
      session[:user_id] = current_user.id
      render json: { message: "Login successful", user: current_user }, status: :ok
    else
      render json: { errors: { invalid: ["credentials"] } }, status: :unprocessable_entity
    end
  end


    def destroy 
        session.delete(:user_id)
        head :no_content
    end

end


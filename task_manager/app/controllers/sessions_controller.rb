class SessionsController < ApplicationController

    def create    
        if current_user && current_user.authenticate(params[:password])
          session[:user_id] = user.id
          render json: { message: "Login successfull", user: user }, status: :ok
        else
          render json: { errors: { invalid: ["credentials"] } }, status: :unprocessable_entity
        end
      end

    def destroy 
        session.delete(:user_id)
        head :no_content
    end

end

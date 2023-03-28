class SessionController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
    
        if user && user.authenticate(params[:password])
          session[:user_id] = user.id
          render json: { user: user }, status: :ok
        else
          render json: { errors: { invalid: ["credentials"] } }, status: :unprocessable_entity
        end
      end

    def destroy 
        session.delete(:user_id)
        head :no_content
    end

end

class ApplicationController < ActionController::API
    include ActionController::Cookies

    def save_user(id)
        session[:user_id] = id
    end

    # delete user id in session
    def remove_user
        session.delete(:user_id)
        render json: { message: "Logged out successfully"}
    end
    
    # get logged in user
    def current_user
        current_user = User.find_by(id: session[:user_id]) 
    end

      
        private
      
    def authenticate_user!
          if !current_user
            render json: { error: "You aren't signed in or signed up" }, status: :unauthorized
          end
    end
      
    
end


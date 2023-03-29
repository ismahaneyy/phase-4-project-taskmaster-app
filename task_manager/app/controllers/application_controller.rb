class ApplicationController < ActionController::API

    before_action :authenticate_user!
      
        private
      
    def authenticate_user!
          if !current_user
            render json: { error: "You aren't signed in or signed up" }, status: :unauthorized
          end
    end

    def current_user
        @current_user ||= User.find_by(authentication_token: request.headers['Authorization'])
      end
      
    
end


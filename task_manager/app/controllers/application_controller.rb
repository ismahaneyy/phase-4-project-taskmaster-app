class ApplicationController < ActionController::API
    include ActionController::Cookies

    # before_action :save_user_id

     # hash data into web token
     def encode(uid, email)
        payload = {
            data: {
                uid: uid,
                email: email,
                role: 'admin'
            },
        }
        JWT.encode(payload, 'task_manager' , 'HS256')
    end

    # unhash the token
    def decode(token)
        JWT.decode(token, 'task_manager' , true, { algorithm: 'HS256' })
    end

    # verify authorization headers
    def verify_auth
        auth_headers = request.headers['Authorization']
        if !auth_headers
            render json: auth_headers
        else
            token = auth_headers.split(' ')[1]
            save_user_id(token)
        end
    end

    # save user's id
    def save_user_id(token)
        @uid = decode(token)[0]["data"]["uid"].to_i
    end

    def save_user(uid)
        session[:user_id] = uid
    end

    # delete user id in session
    def remove_user
        session.delete(:user_id)
        render json: { message: "Logged out successfully"}
    end
    
    # get logged in user
    def current_user
       @current_user = User.find_by(id: @uid) 
    end

      
        private
      
    def authenticate_user!
          if !current_user
            render json: { error: "You aren't signed in or signed up" }, status: :unauthorized
          end
    end
      
    
end


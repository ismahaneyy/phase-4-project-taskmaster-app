class PasswordResetController < ApplicationController

    def new
      user = User.find_by_email(params[:email])
      if user

        # send password reset email to user using PasswordResetMailer

        PasswordResetMailer.password_reset(user).deliver_later
        render json: { message:'Password reset instructions have been sent to your email.' } 
      else
        render json: { message:'Email address has not been found' } 
      end
    end

  
    def create
      user = User.find_by(email: params[:email])
      token = user.password_reset_token

        if token == params[:password_reset_token]
          user.update(password: params[:password])
          PasswordResetMailer.password_success(user).deliver_now
          render json: { message: 'successful' }
        else
          render json: { message: 'failed' }
        end

    end
    
  end
  
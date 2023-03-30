class WelcomeMailer < ApplicationMailer
    def welcome_email(user)
        @user = user
        mail(to: @user.email, subject: "Welcome to My Site!")
    end
end

class User < ApplicationRecord
    
    has_secure_password
    has_many :tasks
    has_many :projects
    has_many :password_reset 

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true, format: { with:URI::MailTo::EMAIL_REGEXP}
    validates :password, presence: true, length: { minimum:6 }, on::create

end

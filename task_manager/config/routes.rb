Rails.application.routes.draw do
# tasks routes

get "/projects/:project_id/tasks", to: "tasks#index"
get "/projects/:project_id/tasks/:id", to: "tasks#show"
post "/projects/:project_id/tasks", to: "tasks#create"
patch "/projects/:project_id/tasks/:id", to: "tasks#update"
delete "/projects/:project_id/tasks/:id", to: "tasks#destroy"

get '/user/projects', to: "projects#index"
get '/user/projects/:id', to: "projects#show" 
post '/user/projects', to: "projects#create" 
put '/user/projects/:id', to: "projects#update" 
delete '/user/projects/:id', to: "projects#destroy"
# get '/users/:user_id/projects', to: "projects#index"


resources :users, only: [:create, :update, :destroy, :show]

post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'
post '/signup', to: 'users#create'
get '/checkout', to: 'sessions#check_out'


post '/password_reset/new', to: 'password_reset#new'
put 'password_reset/create', to: 'password_reset#create'
  
end

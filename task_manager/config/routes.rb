Rails.application.routes.draw do
# tasks routes

get "/projects/:project_id/tasks", to: "tasks#index"
get "/projects/:project_id/tasks/:id", to: "tasks#show"
post "/projects/:project_id/tasks", to: "tasks#create"
patch "/projects/:project_id/tasks/:id", to: "tasks#update"
delete "/projects/:project_id/tasks/:id", to: "tasks#destroy"
post '/users/:user_id/projects', to: "projects#create" 
put '/users/:user_id/projects/:id', to: "projects#update" 
delete '/users/:user_id/projects/:id', to: "projects#destroy"
get '/users/:user_id/projects', to: "projects#index"

resources :users, only: [:create, :update, :destroy, :show]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  
end

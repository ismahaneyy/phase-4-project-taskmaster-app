Rails.application.routes.draw do
# tasks routes
get "/projects/:project_id/tasks", to: "tasks#index"
get "/projects/:project_id/tasks/:id", to: "tasks#show"
post "/projects/:project_id/tasks", to: "tasks#create"
patch "/projects/:project_id/tasks/:id", to: "tasks#update"
delete "/projects/:project_id/tasks/:id", to: "tasks#destroy"
  
resources :projects, only: [:index, :create, :show, :update, :destroy]

end

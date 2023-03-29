Rails.application.routes.draw do
# tasks routes
get "/tasks", to: "tasks#index"
get "/tasks/:id", to: "tasks#show"
post "/tasks", to: "tasks#create" 
put "/tasks/:id", to: "tasks#update"
delete "/tasks/:id", to: "tasks#destroy"
  
resources :projects, only: [:index, :create, :show, :update, :destroy]

end

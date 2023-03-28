Rails.application.routes.draw do
# tasks routes
get "/tasks", to: "tasks#index"
get "/tasks/:id", to: "tasks#show"
post "/tasks", to: "tasks#create" 
put "/tasks/:id", to: "tasks#update"
delete "/tasks/:id", to: "tasks#destroy"
  
resources :users, only: [:create, :update, :destroy]

post '/login', to: 'sessions#create'
delete '/logout', to: 'sessions#destroy'
post '/signup', to: 'users#create'
  
end

Rails.application.routes.draw do
# tasks routes
get "/tasks", to: "tasks#index"
get "/tasks/:id", to: "tasks#show"
post "/tasks", to: "tasks#create" 
put "/tasks/:id", to: "tasks#update"
end

Rails.application.routes.draw do
  
  resources :users, only: [:create, :update, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  
end

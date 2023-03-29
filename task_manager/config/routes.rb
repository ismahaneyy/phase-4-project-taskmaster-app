Rails.application.routes.draw do
  
  resources :users, only: [:index, :create, :update, :destroy]
  resources :projects, only: [:index, :create, :show, :update, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'

end

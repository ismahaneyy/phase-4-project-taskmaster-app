Rails.application.routes.draw do
  
  resources :users, only: [:create, :update, :destroy, :show]
  resources :projects, only: [:index, :create, :update, :destroy]

  resources :users do
    resources :projects
  end

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  
end

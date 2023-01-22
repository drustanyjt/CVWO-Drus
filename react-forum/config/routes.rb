Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      get 'users/read/:id', to: 'users#read'
      delete 'users/destroy/:id', to: 'users#destroy'
      get 'discussions/index'
      post 'discussions/create'
      get 'discussions/show/:id', to: 'discussions#show'
      delete 'discussions/destroy/:id', to: 'discussions#destroy'
      get 'comments/index'
      post 'comments/create'
      get 'comments/show/:discussion_id', to: 'comments#show'
      delete 'comments/destroy/:id', to: 'comments#destroy'
    end
  end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
  get '/*path' => 'home#index'
end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'discussions/index'
      post 'discussions/create'
      get 'discussions/show/:id', to: 'discussions#show'
      delete 'discussions/destroy/:id', to: 'discussions#destroy'
    end
  end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
  get '/*path' => 'home#index'
end

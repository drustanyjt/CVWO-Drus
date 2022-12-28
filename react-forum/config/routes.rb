Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'discussions/index'
      post 'discussions/create'
      get 'discussions/show', to: 'discussions#show'
      delete 'discussions/destroy', to: 'dsicussions#destroy'
    end
  end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
  get '\*path' => 'home#index'
end

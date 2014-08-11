Rails.application.routes.draw do

  root 'plays#index'
  resources :plays

  post "/search", to: 'plays#index'
  # get "/search", to: 'plays#index'

end

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root to: 'pages#home'
  get 'about', action: :about, controller: 'pages'
  get 'contact', action: :contact, controller: 'pages'
end

Rails.application.routes.draw do
  root :to => 'trello_clone#index'
  get '*path' => 'trello_clone#index'

  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

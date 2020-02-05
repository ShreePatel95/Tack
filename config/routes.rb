Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :channels, only: [:index, :create, :show, :update, :destroy] do
      post "add_member", to: 'channels#add_member', as: 'add_member'
      delete "remove_member", to: 'channels#remove_member', as: 'remove_member'
    end
  end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show, :update]
    resources :leads, only: [:create, :destroy, :update, :index]
    resources :quotes, only: [:create, :destroy, :update, :index, :show]
    resources :search, only: [:index]
    resources :makes, only: [:index]
  end

end

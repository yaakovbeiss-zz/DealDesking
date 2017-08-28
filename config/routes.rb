Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :show]
    resources :leads, only: [:create, :destroy, :update, :index]
    resources :search, only: [:index]

    resources :makes, only: [:index] do
      resources :models, only: [:index] do
        resources :quotes, only: [:create, :destroy, :update, :index]
      end
    end
  end

end

class Api::ModelsController < ApplicationController

  def index
    @models = Model.includes(:trims).all
  end

end

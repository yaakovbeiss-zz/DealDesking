class Api::ModelsController < ApplicationController

  def index
    @models = Model.all
  end

end

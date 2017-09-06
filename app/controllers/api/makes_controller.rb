class Api::MakesController < ApplicationController

  def index
    @makes = Make.includes(:models, :trims).all
  end

end

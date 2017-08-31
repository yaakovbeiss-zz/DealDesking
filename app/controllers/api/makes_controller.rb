class Api::MakesController < ApplicationController

  def index
    @makes = Make.includes(:models).all
  end

end

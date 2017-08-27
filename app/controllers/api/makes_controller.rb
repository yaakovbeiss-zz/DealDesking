class Api::MakesController < ApplicationController

  def index
    @makes = Make.all
  end

end

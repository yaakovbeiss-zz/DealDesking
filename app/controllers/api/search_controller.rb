class Api::SearchController < ApplicationController
  def index

    if params[:query].present?
      @leads = current_user.leads.where('lower(name) LIKE (?)', "%#{params[:query].downcase}%")
    else
      @leads = current_user.leads
    end
  end

end

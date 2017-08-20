class Api::LeadsController < ApplicationController

  def create
    @lead = Lead.new(lead_params)
    @lead.user_id = current_user.id

    if @lead.save
      render :index
    else
      render json: @lead, status: 422
    end
  end

  def index
    @leads = current_user.leads
  end

  def destroy
    @lead = Lead.find(params[:id])
  end

  def update
    lead = Lead.find(params[:id])

    if lead.update(lead_params)
      render :index
    else
      render json: lead, status: 422
    end
  end

  private

  def lead_params
    params.require(:lead).permit(:name, :email, :phone_number, :address)
  end

end

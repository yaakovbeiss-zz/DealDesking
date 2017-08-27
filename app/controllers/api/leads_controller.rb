class Api::LeadsController < ApplicationController

  def create
    @lead = Lead.new(lead_params)
    @lead.user_id = current_user.id

    if @lead.save
      @leads = current_user.leads
      render :index
    else
      render json: @lead, status: 422
    end
  end

  def index
    @leads = current_user.leads if current_user
  end

  def destroy
    @lead = Lead.find(params[:id])
    @lead.destroy
    @leads = current_user.leads
    render :index
  end

  def update
    lead = Lead.find(params[:id])

    if lead.update(lead_params)
      @leads = current_user.leads
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

class Api::QuotesController < ApplicationController

  def create
    @quote = Quote.new(quote_params)
    @quote.user_id = current_user.id

    if @quote.save
      @quotes = current_user.quotes
      render :index
    else
      render json: @quote, status: 422
    end
  end

  def index
    @quotes = current_user.quotes.includes(:lead)
  end

  def destroy
    @quote = Quote.find(params[:id])
    @quote.destroy
    @quotes = current_user.quotes
    render :index
  end

  def update
    quote = Quote.find(params[:id])

    if lead.update(quote_params)
      render :index
    else
      render json: quote, status:422
    end
  end

  private

  def quote_params
    params.require(:quote).permit(:user_id, :lead_id, :year, :make, :make_id, :model, :model_id,
      :trim, :trim_id, :title, :msrp, :sell_price, :profit, :rebate, :residual, :money_factor,
      :months, :tax, :bank_fee, :registration, :doc_fee, :smog, :misc_fee, :rebate_tax,
      :customer_cash, :bank_fee_plan, :registration_plan, :smog_plan, :misc_fee_plan,
      :rebate_tax_plan, :mileage, :doc_fee_plan, :down_payment, :drive_off, :monthly_payment)
  end

end

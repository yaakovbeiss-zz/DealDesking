json.array! @quotes.each do |quote|
  json.id quote.id
  json.user_id quote.user_id
  json.lead_id quote.lead_id
  json.year quote.year
  json.make quote.make
  json.model quote.model
  json.trim quote.trim
  json.title quote.title
  json.msrp quote.msrp
  json.sell_price quote.sell_price
  json.profit quote.profit
  json.monthly_payment quote.monthly_payment
  json.tax quote.tax
  json.bank_fee quote.bank_fee
  json.registration quote.registration
  json.doc_fee quote.doc_fee
  json.smog quote.smog
  json.misc_fee quote.misc_fee
  json.rebate_tax quote.rebate_tax
  json.customer_cash quote.customer_cash
  json.bank_fee_plan quote.bank_fee_plan
  json.registration_plan quote .registration_plan
  json.smog_plan quote.smog_plan
  json.misc_fee_plan quote.misc_fee_plan
  json.rebate_tax_plan quote.rebate_tax_plan
  json.created_at quote.created_at
    json.terms quote.terms do |term|
      json.id term.id
      json.quote_id term.quote_id
      json.months term.months
        json.rebates term.rebates do |rebate|
          json.id rebate.id
          json.term_id rebate.term_id
          json.amount rebate.amount
        end
        json.money_factor term.money_factors do |money_factor|
          json.id money_factor.id
          json.term_id money_factor.term_id
          json.money_factor money_factor.money_factor
        end
        json.residual term.residuals do |residual|
          json.id residual.id
          json.term_id residual.term_id
          json.residual residual.residual

          json.mileages residual.mileages do |mileage|
            json.id mileage.id
            json.residual_id mileage.residual_id
            json.mileage mileage.mileage
          end

        end
    end
end

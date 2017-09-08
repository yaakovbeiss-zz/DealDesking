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
  json.rebate quote.rebate
  json.residual quote.residual
  json.months quote.months
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
end

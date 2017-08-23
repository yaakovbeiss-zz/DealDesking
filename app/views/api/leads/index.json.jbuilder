@leads.each do |lead|
  json.set! lead.id do
    json.id lead.id
    json.name lead.name
    json.email lead.email
    json.phone_number lead.phone_number
    json.address lead.address
    json.created_at lead.created_at.strftime("%B " "%d, " "%Y")
    json.updated_at lead.updated_at
  end
end

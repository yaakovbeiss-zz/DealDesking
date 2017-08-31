json.array! @makes.each do |make|
  json.id make.id
  json.name make.name
  json.year make.year
    json.models make.models do |model|
      json.id model.id
      json.name model.name
      json.trims model.trims
    end
end

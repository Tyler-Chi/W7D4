
# right now we have access to @pokemon


json.pokemon do
  json.extract! @pokemon, :id, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@pokemon.image_url)
end

json.items @pokemon.items do |item|
  json.extract! item, :id, :name, :pokemon_id, :price, :happiness
  json.image_url asset_path(item.image_url)
end


# create_table "pokemons", force: :cascade do |t|
#   t.string "name", null: false
#   t.integer "attack", null: false
#   t.integer "defense", null: false
#   t.string "poke_type", null: false
#   t.string "moves", default: [], null: false, array: true
#   t.string "image_url", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

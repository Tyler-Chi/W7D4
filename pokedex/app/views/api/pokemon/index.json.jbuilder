# we have access to @pokemons right now
# if we are in a jbuilder file, it will naturally give us one big object.


@pokemons.each do |pokemon|
  json.set! pokemon.id do

    json.extract! pokemon, :id, :name
    json.image_url asset_path(pokemon.image_url)

  end
end

# @pokemons.each do |poke|
#   json.set! poke.id do
#     json.extract! poke, :id, :name
#     json.image_url asset_path(poke.image_url)
#   end
# end

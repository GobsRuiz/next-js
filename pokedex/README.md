{
        pokemons.results.map((pokemon, index) => (
          <Card key={index} image={index + offset} name={pokemon.name} />
        ))
      }


      <div>
        <button onClick={() => pagination(pokemons.previous, false)}>prev</button>
        <button onClick={() => pagination(pokemons.next, true)}>next</button>
      </div>
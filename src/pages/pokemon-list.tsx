import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/pokemon-service';
import { Link } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';

const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        PokemonService.getPokemons().then(pokemon => setPokemons(pokemon))
    }
        , []);

    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    <PokemonSearch />

                    {pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
                <Link style={{ position: 'fixed', bottom: '25px', right: '25px', color: '#ff8a65 deep-orange lighten-2' }} to='/pokemons/create/' className='                btn-floating btn-large waves-effect waves-light red z-depth-3'><i className='material-icons'>add</i></Link>
            </div>
        </div>
    );
}

export default PokemonList;
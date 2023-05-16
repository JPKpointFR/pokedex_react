import React, { FunctionComponent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loader';


type Params = { id: string };

const PokemonEdit: FunctionComponent = () => {

    const { id } = useParams<Params>();
    const pokemonId = id ? parseInt(id) : undefined;
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        if (pokemonId !== undefined) {
            PokemonService.getPokemon(pokemonId).then(pokemon => setPokemon(pokemon));
        }
    }, [pokemonId]);

    return (
        <div>
            {pokemon ? (
                <div className="row">
                    <h2 className="header center">Éditer {pokemon.name}</h2>
                    <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
                </div>
            ) : (
                <h4 className="center"><Loader /></h4>
            )}
        </div>
    );
}

export default PokemonEdit;
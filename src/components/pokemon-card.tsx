import React, { FunctionComponent, useState } from "react";
import Pokemon from "../models/pokemon";
import './pokemon-card.css';
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import { useNavigate } from "react-router-dom";

type Props = {
    pokemon: Pokemon,
    borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon, borderColor = '#009688' }) => {

    const [color, setColor] = useState<string>();
    const navigate = useNavigate();

    const showBorder = () => {
        setColor(borderColor);
    }
    const hideBorder = () => {
        setColor("#F5F5F5"); /// On remet la bordure en gris
    }

    const goToPokemon = (id: string) => {
        navigate(`/pokemons/${id}`)
    }

    return (

        <div className="col s6 m4" onClick={() => goToPokemon(pokemon.id.toString())} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{ borderColor: color }}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p><small>{formatDate(pokemon.created)}</small></p>
                        {pokemon.types.map(type => (
                            <span key={type} className={formatType(type)}>{type}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
}

export default PokemonCard;
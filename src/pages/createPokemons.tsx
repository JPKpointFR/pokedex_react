import React, { FunctionComponent, useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon'

const PokemonCreateForm: FunctionComponent = () => {
    const [pokemon] = useState<Pokemon>(new Pokemon());

    return (
        < div className="row" >
            <h2 className='center'>Ajouter un Pokémon</h2>
            <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
        </div >
    )
}




export default PokemonCreateForm
























/**
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
import { useNavigate } from 'react-router-dom';
import PokemonService from '../services/pokemon-service';



type Field = {
    value?: any,
    error?: string,
    isValid?: boolean,
};

type Form = {

    id: Field,
    name: Field,
    hp: Field,
    cp: Field,
    picture: Field,
    types: Field,
    created: Field,
};

const PokemonCreateForm: FunctionComponent = () => {

    const navigate = useNavigate()

    let pokemon = new Pokemon()
    const [form, setForm] = useState<Form>({
        id: { value: pokemon.id, isValid: true },
        name: { value: pokemon.name, isValid: true },
        hp: { value: pokemon.hp, isValid: true },
        cp: { value: pokemon.cp, isValid: true },
        picture: { value: pokemon.picture, isValid: true },
        types: { value: pokemon.types, isValid: true },
        created: { value: pokemon.created, isValid: true },
    })

    const types: string[] = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];

    const hasType = (type: string): boolean => {
        return form.types.value.includes(type)
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = { [fieldName]: { value: fieldValue } };

        setForm({ ...form, ...newField })
    }

    const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        const checked = e.target.checked;
        let newField: Field;

        if (checked) {
            // Si l'utilisateur coche un type, on l'ajoute à la liste des types du pokémon.
            const newTypes: string[] = form.types.value.concat([type]);
            newField = { value: newTypes };
        } else {
            //Si l'utilisateur décoche un type, on le retire de la liste des types du pokemon.
            const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type);
            newField = { value: newTypes };
        }

        setForm({ ...form, ...{ types: newField } })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {
            pokemon.name = form.name.value;
            pokemon.hp = form.hp.value;
            pokemon.cp = form.cp.value;
            pokemon.types = form.types.value;
            pokemon.picture = form.picture.value;

            PokemonService.createPokemon(pokemon).then(() => navigate(`/pokemons/`))
        }
    }

    const validateForm = () => {
        let newForm: Form = form;


        // Validator name
        if (!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
            const errorMsg: string = 'Le nom du pokémon est requis (1-25).';
            const newField: Field = { value: form.name.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ name: newField } };
        } else {
            const newField: Field = { value: form.name.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ name: newField } };
        }

        // Validator hp
        if (!/^[0-9]{1,3}$/.test(form.hp.value)) {
            const errorMsg: string = 'Les points de vie du pokémon sont compris entre 0 et 999.';
            const newField: Field = { value: form.hp.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ hp: newField } };
        } else {
            const newField: Field = { value: form.hp.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ hp: newField } };
        }

        // Validator cp
        if (!/^[0-9]{1,2}$/.test(form.cp.value)) {
            const errorMsg: string = 'Les dégâts du pokémon sont compris entre 0 et 99';
            const newField: Field = { value: form.cp.value, error: errorMsg, isValid: false };
            newForm = { ...newForm, ...{ cp: newField } };
        } else {
            const newField: Field = { value: form.cp.value, error: '', isValid: true };
            newForm = { ...newForm, ...{ cp: newField } };
        }

        setForm(newForm);
        return newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid;
    }

    const isTypesValid = (type: string) => {
        if (form.types.value.length === 1 && hasType(type)) {
            return false
        }
        if (form.types.value.length >= 3 && !hasType(type)) {
            return false
        }
        return true
    }

*/
/** 
  
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="row">
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable">

                        <div className="card-stacked">
                            <div className="card-content">

                             //   {/* Pokemon name */ //}
                             /** 
                                <div className="form-group">
                                    <label htmlFor="name">Pokemon name</label>
                                    <input name='name' onChange={e => handleInput(e)} id="name" type="text" className="form-control"></input>
                                    {form.name.error && <div className='card-panel red accent-1'>{form.name.error}</div>}
                                </div>
                                */
                               // {/* Picture */}
                               /**
                                <div className="form-group">
                                    <label htmlFor="picture">Picture link</label>
                                    <input name='picture' onChange={e => handleInput(e)} id="picture" type="text" className="form-control"></input>
                                    {form.name.error && <div className='card-panel red accent-1'>{form.name.error}</div>}
                                </div>
                                 */
                               // {/* Pokemon hp */}
                               /** 
                                <div className="form-group">
                                    <label htmlFor="hp">Point de vie</label>
                                    <input id="hp" name='hp' onChange={e => handleInput(e)} value={form.hp.value} type="number" className="form-control"></input>
                                    {form.name.error && <div className='card-panel red accent-1'>{form.hp.error}</div>}
                                </div>
                                */
                              //  {/* Pokemon cp */}
                              /** 
                                <div className="form-group">
                                    <label htmlFor="cp">Dégâts</label>
                                    <input id="cp" name='cp' onChange={e => handleInput(e)} value={form.cp.value} type="number" className="form-control"></input>
                                    {form.name.error && <div className='card-panel red accent-1'>{form.cp.error}</div>}
                                </div>
                                */
                             //   {/* Pokemon types */}
                             /** 
                                <div className="form-group">
                                    <label>Types</label>
                                    {types.map(type => (
                                        <div key={type} style={{ marginBottom: '10px' }}>
                                            <label>
                                                <input disabled={!isTypesValid(type)} id={type} type="checkbox" onChange={e => selectType(type, e)} value={type} checked={hasType(type)} className="filled-in"></input>
                                                <span>
                                                    <p className={formatType(type)}>{type}</p>
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="card-action center">
                            */
                             //   {/* Submit button */}
                             /** 
                                <button type="submit" className="btn">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PokemonCreateForm;

*/

import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonCreateForm from './pages/createPokemons';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';


const App: FunctionComponent = () => {

  return (
    <Router>
      <div>
        {/* La barre de navigation commun à toutes les pages */}
        <nav>
          <div className='nav_wrapper teal'>
            <Link to='/' className='brand-logo center'>Pokédex</Link>
          </div>
          <br />
        </nav>
        {/* Le système de gestion des routes de notre application */}

        <Routes>

          <Route path='/login' element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path='/' element={<PokemonList />} />
            <Route path='/pokemons' element={<PokemonList />} />
            <Route path='/pokemons/:id' element={<PokemonsDetail />} />
            <Route path='/pokemons/edit/:id' element={<PokemonEdit />} />
            <Route path='/pokemons/create/' element={<PokemonCreateForm />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App;






















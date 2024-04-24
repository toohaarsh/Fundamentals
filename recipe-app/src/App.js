import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import './App.css'

function App() {

    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('public')
    const [search, setSearch] = useState("")
    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await axios.get(
                    'https://api.edamam.com/search',
                    {
                        params: {
                            q: query,
                            app_id: '22d45c4f',
                            app_key: 'ccb01d77a019c1619f34115871fd8c89',
                            from: 1,
                            to: 20
                        }
                    }
                );
                console.log(response.data.hits);
                setRecipes(response.data.hits)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getRecipes();
    }, [query]);

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }
    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }
    return (
        <div className='App'>
            <div className='top-nav'>
                <span className='span1'></span>
            </div>
            <div className='navbar'>
                <form className='search-form' onSubmit={getSearch}>
                    <input className='input-bar' type="text" value={search} placeholder='Search for a recipe' onChange={updateSearch} />
                    <button className='submit-button' type='submit'>Search</button>
                </form>
            </div>



            <div className='recipes'>
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

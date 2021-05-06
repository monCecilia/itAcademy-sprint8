import React from 'react'
import { useState, useEffect } from 'react'
import InfoJokes from './InfoJokes'
import IsLoadingJokes from '../JokesComponent/IsLoadingJokes'

const Jokes = () => {
    const JokesLoading = IsLoadingJokes(InfoJokes);
    const [jokesState, setJokesState] =  useState({
      loading: false,
      repos: null,
    });

    useEffect(() => {
        setJokesState({ loading: true });
        const jokeData = fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
        });
        jokeData.then((response) => response.json())
        .then((dataJokes) => {
            setJokesState({ loading: false, repos: dataJokes });
        });
    }, [setJokesState]);


    return (

        <div>
        <div class="container">
        <JokesLoading isLoading={jokesState.loading} repos={jokesState.repos} />
        </div>
        </div>
    );
}
export default Jokes;
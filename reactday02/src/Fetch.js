import './App.css';
import React, {useEffect, useState} from 'react';

export default function Fetch(){
    const ChuckUrl = "https://api.chucknorris.io/jokes/random"
    const DadUrl = "https://icanhazdadjoke.com/"
    const [joke, setJoke] = useState({value: ""})
    const [dadJoke, setDadJoke] = useState({joke: ""})

    function getJoke() {
        fetch(ChuckUrl)
            .then(res => res.json())
            .then(joke => {
                setJoke(joke)
            })
            .catch(err => console.log("Ups" + err))
    }



    function getDadJoke() {
        fetch(DadUrl, { headers: { 'Accept': 'application/json' } })
            .then(res => res.json())
            .then(dadJoke => {
                setDadJoke(dadJoke)
            })
            .catch(err => console.log("Ups" + err))
    };
    
    useEffect(() => {
        getDadJoke();
        const interval = setInterval(() => getDadJoke(), 10000);
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
        <div className="App">
            <button onClick={getJoke}>Get Chucknorris</button>
            <p>{joke.value}</p>
            <h3>Dad Joke:</h3>
            <p>{dadJoke.joke}</p>
        </div>
      );
}
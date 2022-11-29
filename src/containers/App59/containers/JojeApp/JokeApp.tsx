import React, {useEffect, useState} from 'react';
import Button from "../../components/Button/Button";

const url = 'https://api.chucknorris.io/jokes/random';

const JokeApp = () => {
  const [joke, setJoke] = useState();

  useEffect(() => {

    swapJoke().catch(console.error);
  }, []);

  const swapJoke = async () => {
      const response = await fetch(url);

      if (response.ok) {
        const infoJoke = await response.json();
        const joke = infoJoke.value;
        setJoke(joke)
      }
  }

  return (
    <>
      <div style={{marginTop: '30px'}}>
        {joke}
      </div>
      <Button onClick={swapJoke}>New Joke</Button>
    </>
  );
};

export default JokeApp;
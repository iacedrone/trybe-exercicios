const url = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(url, myObject)
  .then((response) => response.json())
  .then((data) => console.log(data.joke));
};

window.onload = () => fetchJoke();

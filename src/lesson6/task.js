// с помощью Fetch API и swapi.co API получить следующие данные

// Климат на любой планете по её имени
// {planetName} – String
const getClimate = function (planetName) {
  const URL = 'https://swapi.co/api/planets/?search=';

  return fetch(`${URL}${planetName}`)
    .then(response => response.json())
    .then(data => data.results[0].climate)
    .catch(err => { throw err });

}

// Получить информацию (Object) о любом персонаже по имени
// {name} – String
const getProfile = function (name) {
  const URL = 'https://swapi.co/api/people/?search=';
  
  return fetch(`${URL}${name}`)
    .then(response => response.json())
    .then(data => {
      if (!data.results[0]) {
        throw new Error('Non existent character');
      }
      return data.results[0];
    })
}
// Получить список пилотов (имена в виде Array of Strings) космического корабля
// по его названию
// {starshipName} - String
const getPilots = function (starshipName) {

  const URL = 'https://swapi.co/api/starships/?search=';

  return fetch(`${URL}${starshipName}`)
    .then(response => response.json())
    .then(data => data.results[0].pilots)
    .then(pilots => {
      return Promise.all(pilots.map(pilot => {
        return fetch(pilot)
          .then(response => response.json())
          .then(item => item.name)
      }))
    })
    .catch(err => { throw err });
};

export default {
  getClimate,
  getProfile,
  getPilots
}

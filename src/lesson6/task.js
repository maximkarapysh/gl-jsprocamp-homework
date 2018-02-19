// с помощью Fetch API и swapi.co API получить следующие данные

// Климат на любой планете по её имени
// {planetName} – String
const getClimate = async function (planetName) {
  const URL = 'https://swapi.co/api/planets/?search=';

  try {
    let response = await fetch(`${URL}${planetName}`);
    let data = await response.json();
    return data.results[0].climate
  } catch (error) {
    throw new Error(error)
  }
}

// Получить информацию (Object) о любом персонаже по имени
// {name} – String

const getProfile = async function (name) {
  const URL = 'https://swapi.co/api/people/?search=';

  try {
    let response = await fetch(`${URL}${name}`);
    let data = await response.json();

    if (!data.results[0]) {
      throw new Error('Non existent character');
    }

    return data.results[0];
  } catch (error) {
    throw new Error(error)
  }
}

// Получить список пилотов (имена в виде Array of Strings) космического корабля
// по его названию
// {starshipName} - String

const getPilots = async function (starshipName) {
  const URL = 'https://swapi.co/api/starships/?search=';

  try {
    let response = await fetch(`${URL}${starshipName}`);
    let data = await response.json();

    if (data.count === 0) {
      throw new Error('non existent such starship');
    }

    return Promise.all(data.results[0].pilots.map(async (pilot) => {
      let response = await fetch(pilot);
      let data = await response.json();
      return data.name;
    }))
  } catch (error) {
    throw new Error(error)
  }
};

export default {
  getClimate,
  getProfile,
  getPilots
}

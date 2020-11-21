import axios from 'axios'

const getCityID = (city) => {

    const instance = axios.create({
        baseURL: `${process.env.REACT_APP_ZOMATO_BASE_URL}`
      });
      // Alter defaults after instance has been created
      instance.defaults.headers.common['user-key'] = `${process.env.REACT_APP_ZOMATO_API_KEY}`;

    return instance.get(`${process.env.REACT_APP_ZOMATO_BASE_URL}/cities?q=${city}`);
}

const getRestaurantsByCityID = (cityID) => {

    const instance = axios.create({
        baseURL: `${process.env.REACT_APP_ZOMATO_BASE_URL}`
      });
      // Alter defaults after instance has been created
      instance.defaults.headers.common['user-key'] = `${process.env.REACT_APP_ZOMATO_API_KEY}`;

    return instance.get(`${process.env.REACT_APP_ZOMATO_BASE_URL}/search?entity_id=${cityID}&entity_type=city`);
}

const getRestaurantsDetails = (restaurantID) => {

  const instance = axios.create({
      baseURL: `${process.env.REACT_APP_ZOMATO_BASE_URL}`
    });
    // Alter defaults after instance has been created
    instance.defaults.headers.common['user-key'] = `${process.env.REACT_APP_ZOMATO_API_KEY}`;

  return instance.get(`${process.env.REACT_APP_ZOMATO_BASE_URL}/restaurant?res_id=${restaurantID}`);
}


export {getCityID, getRestaurantsByCityID, getRestaurantsDetails};
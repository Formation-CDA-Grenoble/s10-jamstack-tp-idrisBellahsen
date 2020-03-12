import React from 'react';
import RestaurantList from '../components/RestaurantList';
import DataContainer from '../containers/DataContainer';


const query = `
query MyQuery {
  allRestaurants {
    id
    name
    phone
    slug
    description
    address
    image {
      url
    }
  }
}

`;

const Home = ({ homepage, allRestaurants }) =>
  <div>
    
    <h2>Restaurants :</h2>
    <RestaurantList restaurants={allRestaurants} />
</div>
;

export default () =>
  <DataContainer
    query={query}
    component={Home}
  />
;
import React from 'react';
import { Restaurant } from '../components';
import DataContainer from '../containers/DataContainer';

const makeQuery = (slug) => `
query MyQuery {
    restaurant(filter: {slug: {eq: "${slug}"}}) {
      address
      description
      name
      phone
      slug
      image {
        url
      }
      localisation {
        latitude
        longitude
      }
    }
  }
`;

const RestaurantPage = ({ restaurant }) =>
    <Restaurant restaurant={restaurant} />

;

export default ({ match }) => {
  const { slug } = match.params;
  return (
    <DataContainer
      query={makeQuery(slug)}
      component={RestaurantPage}
    />
  );
}
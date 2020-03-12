import React from 'react';
import RestaurantPreview from './RestaurantPreview';

const Styles = {
  ul: {
    paddingInlineStart: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1em',
  },
  li: {
    listStyleType: 'none',
  },
};

const RestaurantList = ({ restaurants }) =>
  <ul style={Styles.ul}>
    {restaurants.map( (restaurant, index) =>
      <li key={index} style={Styles.li}>
        <RestaurantPreview {...restaurant} />
      </li>
    )}
  </ul>
;

export default RestaurantList;
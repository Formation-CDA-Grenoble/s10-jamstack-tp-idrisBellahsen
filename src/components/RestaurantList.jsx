import React from 'react';
import RestaurantPreview from './ArticlePreview';

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

const RestaurantList = ({ articles }) =>
  <ul style={Styles.ul}>
    {articles.map( (article, index) =>
      <li key={index} style={Styles.li}>
        <RestaurantPreview {...article} />
      </li>
    )}
  </ul>
;

export default RestaurantList;
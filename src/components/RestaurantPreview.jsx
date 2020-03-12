import React from 'react';
import { Link } from 'react-router-dom';
import { cropText } from '../utils';

const RestaurantPreview = ({ title, description,  image, slug }) =>
  <div>
  <Image src={image.url} />
    <p>{title}</p>
    <p>{description}</p>
    <Link to={`/article/${slug}`}>
        <Button variant="primary">Read more&hellip;</Button>
    </Link>

</div>
      
;

export default RestaurantPreview;
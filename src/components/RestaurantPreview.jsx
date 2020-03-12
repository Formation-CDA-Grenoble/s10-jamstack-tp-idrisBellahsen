import React from 'react';
import { Link } from 'react-router-dom';
import { Image,Button } from 'react-bootstrap';

const RestaurantPreview = ({ title, description,  image, slug }) =>
  <div>
  <Image src={image.url} />
    <p>{title}</p>
    <p>{description}</p>
    <Link to={`/restaurant/${slug}`}>
        <Button variant="primary">Read more&hellip;</Button>
    </Link>

</div>
      
;

export default RestaurantPreview;
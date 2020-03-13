import React, { Component } from 'react';
import { Jumbotron, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MapLeaf from './MapLeaf';



export default class Restaurant extends Component {
  state = {
    commentaire: [],
  }

  render = () => {
    const restaurant = (this.props.restaurant)
    const position = [restaurant.localisation.latitude, restaurant.localisation.longitude];
    return (
          <article>
              {console.log(restaurant)}
    <Jumbotron>
      <h1>{restaurant.name}</h1>
      <Image fluid src={restaurant.image.url} />
    </Jumbotron>
    <div dangerouslySetInnerHTML={{ __html: restaurant.description }} />
    <p>N°:{restaurant.phone}</p>
    <p>Adresse: {restaurant.address}</p>
    <MapLeaf position={position} {...restaurant}/>
    <Link to="/">
      <Button variant="secondary">Back to Home</Button>
    </Link>
  </article>
     
    );
  }

    
}
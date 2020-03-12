import React, { Component } from 'react';
import Axios from 'axios';


export default class DataContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const { query } = this.props;
    console.log(process.env.REACT_APP_DATOCMS_API_TOKEN)
    Axios.post(
      // GraphQL endpoint
      'https://graphql.datocms.com/',
      // Requête GraphQL
      { query },
      // Options pour authentifier notre requête
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`,
        } 
      },
    )
    .then(response => {
      if (response.data.hasOwnProperty('errors')) {
        for (let error of response.data.errors) {
          console.error('Error while querying GraphQL API:', error.message);
        }
      } else {
        const { data } = response.data;
        this.setState({ data });
      }
    })
    .catch(error => console.error(error));
  }

  render = () => {
    const { data } = this.state;
    const ComponentName = this.props.component;

    if (data === null) {
      return (
  <div>Loading...</div>
      );
    }

    return (
      <ComponentName {...data} />
    );
  }
}
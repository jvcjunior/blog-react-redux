import React from 'react';
import CardContent from '../card-content';
import Author from '../author';
import Stats from  '../stats';

const Card = () => {
  const {container, image} = style;
  return (
    <div style={container}>
      <img style={image} src="https://unsplash.it/500/200?random=433" alt="cover"/>
      <CardContent />
      <Author />
      <Stats />
    </div>
  );
}

const style = {
  container: {
    'margin': '40px',
    'display': 'inline-block',
    'position': 'relative',
    'background': '#fff',
    'width': '500px',
    'height': '405px',
    'boxShadow': '0 19px 38px rgba(0,0,0,.1), 0 15px 12px rgba(0,0,0,.12)',
    'borderRadius': '8px',
  },
  image:{
    'width': '500px',
    'height': '200px',
    'backgroundColor': '#adadad',
  }
};

export { Card };
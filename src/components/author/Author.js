import React from 'react';

const Author = () => {
  const {container, image, name} = style;
  return (
    <div style={container}>
      <img style={image} src="https://randomuser.me/api/portraits/men/21.jpg" alt="author"/>
      <div style={name}>Michael Fisher</div>
    </div>
  );
}

const style = {
  container: {
    'position': 'absolute',
    'width': '50%',
    'bottom': '8px',
  },
  image:{
    'position': 'absolute',
    'borderRadius':'50%',
    'width': '40px',
    'left': '15px',
    'bottom': '10px',
  },
  name: {
    'position': 'absolute',
    'fontFamily': 'Roboto Slab',
    'color': '#6d6d6d',
    'fontWeight': '400',
    'left': '64px',
    'bottom': '30px',
  }
};

export { Author };
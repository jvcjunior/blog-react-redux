import React from 'react';

const Stats = () => {
  const {container, image, stat, statSpan, span} = style;
  const statStyle = {...statSpan, ...stat};
  const spanStyle = {...statSpan, ...span};
  return (
    <div style={container}>
      <img style={image} src="http://i.imgur.com/iPhyYk7.png" alt="heart" />
      <div style={statStyle}>346</div>
      <span style={spanStyle}> | </span>
      <img style={image} src="http://i.imgur.com/w9zMniq.png" alt="comment" />
      <div style={statStyle}>67</div>
    </div>
  );
}

const style = {
  container: {
    'position': 'absolute',
    'right': '23px',
    'bottom': '26px',
  },
  image:{
    'display': 'inline-block',
    'width': '20px',
    'transform': 'translateY(5px)',
  },
  stat: {
    'display': 'inline-block',
    'fontSize': '.8em',
    'paddingLeft': '5px',
  },
  span: {
    'padding': '0 5px',
  },
  statSpan: {
    'fontFamily': 'Roboto',
    'color': '#adadad',
    'fontWeight': '100',
  }
};

export { Stats };
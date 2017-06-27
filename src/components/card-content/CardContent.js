import React from 'react';

const CardContent = () => {
  const {container, title, description} = style;
  return (
    <div style={container}>
      <h1 style={title}>Titulo do Post</h1>
      <p style={description}>To break the changes is to kill the man, the fight that comes with evil and bland, we don't sow, we don't cry. We make the changes we must fry, because we are kings among people</p>
    </div>
  )
}

const style = {
  container: {
    'paddingLeft': '15px',
  },
  title:{
    'fontFamily': 'Teko',
    'textTransform': 'uppercase',
    'fontStretch': 'condensed',
    'fontWeight': '800',
    'fontSize': '2.3em',
    'marginTop': '12px',
    'marginBottom': '0',
  },
  description: {
    'width': '95%',
    'fontFamily': 'Roboto Slab',
    'fontWeight': '300',
    'fontSize':'.9em',
    'marginTop': '10px',
  }
};

export { CardContent };